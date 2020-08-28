var { google } = require('googleapis');
const colors = require('colors');
const { PLAYLIST_RESPONSE_PART } = require('../config/constants');
const {
  getErrorCode,
  createPlaylist,
  searchVideo,
  insertPlaylistItem
} = require('./playlistHelper');



exports.getUserPlaylists = (req, res) => {
  let service = google.youtube('v3');
  service.playlists.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: PLAYLIST_RESPONSE_PART,
    maxResults: req.query.maxResults,
    mine: true,
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let playlists = response.data.items;
    playlists.map(item => {
      console.log(colors.magenta(item.snippet.title));
    });
    return res.json(response.data);
  });
};


exports.getPlaylistsByChannelId = (req, res) => {
  let service = google.youtube('v3');
  service.playlists.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: PLAYLIST_RESPONSE_PART,
    maxResults: req.query.maxResults,
    channelId: req.query.channelId
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      return res.status(getErrorCode(err)).json(err);
    }
    let playlists = response.data.items;
    playlists.map(item => {
      console.log(colors.magenta(item.snippet.title));
    });
    return res.json(response.data);
  })
}


exports.getPlaylistById = (req, res) => {
  let service = google.youtube('v3');
  service.playlistItems.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    playlistId: req.query.playlistId,
    part: PLAYLIST_RESPONSE_PART,
    maxResults: req.query.maxResults
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let playlists = response.data.items;
    playlists.map(item => {
      console.log(colors.cyan(JSON.stringify(item.snippet.title, null, 2)));
    });
    return res.json(response.data);
  });
};


exports.createNewPlaylist = async (req, res) => {
  let youtube = google.youtube('v3');
  let response;
  try {
    response = await youtube.playlists.insert({
      key: req.query.key,
      oauth_token: req.accessToken,
      part: req.query.part,
      requestBody: req.body
    });
  } catch(err) {
    console.log(`The API returned an error: ${err}`.red);
    return res.status(getErrorCode(err)).json(err);
  }
  return res.json(response.data);
};


exports.createPlaylistFromTracksFile = async (req, res) => {
  const tracksList = req.body.tracks;
  // Create the playlist
  let playlistId;
  try {
    playlistId = await createPlaylist(
      req.accessToken,
      req.query.key,
      req.body.title, 
      req.body.description
    );
  } catch(err) {
    console.log(`The API returned an error: ${err}`.red);
    return res.status(getErrorCode(err)).json(err);
  }
  console.log(`Playlist ${playlistId} Created.`.green);
  //Create VideoIdsList and search for the tracks
  let videoIdsList = [];
  await Promise.all(tracksList.map(async (track, i) => {
    let videoId;
    try {
      videoId = await searchVideo(
        req.accessToken,
        req.query.key,
        track
      );
    } catch(err) {
      console.log(`${track} ${err}`.red);

      return res.status(getErrorCode(err)).json(err);
    }
    videoIdsList.push(videoId);
    console.log(`Track_${i}: ${videoId} Searched.`.cyan);
  }));
  console.log('Search Completed'.green);
  //Iterate `VideoIdsList` & Insert the tracks in the playlist
  let numTracks = 0;
  for(const video of videoIdsList) {
    let trackTitle;
    try {
      trackTitle = await insertPlaylistItem(
        req.accessToken,
        req.query.key,
        playlistId,
        video
      );
    } catch(err) {
      console.log(`The API returned an error: ${err}`.red);
      return res.status(getErrorCode(err)).json(err);
    }
    numTracks++;
    console.log(`${trackTitle} Inserted.`.green);
  }
  let response = {};
  response.status = `${numTracks} Tracks inserted`;
  response.tracks = videoIdsList;
  console.log('This should print last'.yellow);
  return res.json(response);
};
