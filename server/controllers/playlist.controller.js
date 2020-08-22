var fs = require('fs');
var readline = require('readline');
var { google } = require('googleapis');
var OAuth2 = google.auth.OAuth2;
const colors = require('colors');
const { 
  SCOPES,
  TOKEN_PATH,
  API_KEY,
  DUDEPERFECT_CHANNEL_ID,
  USER_CHANNEL_ID,
  PLAYLIST_ID,
  CHANNEL_RESPONSE_PART,
  PLAYLIST_RESPONSE_PART,
  OAUTH2_TOKEN
} = require('../config/constants');




const getUserPlaylists = () => {
  let service = google.youtube('v3');
  service.playlists.list({
    key: API_KEY,
    part: PLAYLIST_RESPONSE_PART,
    maxResults: 25,
    channelId: USER_CHANNEL_ID
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    let playlists = response.data.items;
    playlists.map(item => {
      console.log(colors.magenta(item.snippet.title));
    });
  });
};


const getItemsofPlaylist = () => {
  let service = google.youtube('v3');
  service.playlistItems.list({
    key: API_KEY,
    playlistId: PLAYLIST_ID,
    part: PLAYLIST_RESPONSE_PART,
    maxResults: 25
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err.errors);
      return;
    }
    let playlists = response.data.items;
    playlists.map(item => {
      let { title, channelId, channelTitle, playlistId, publishedAt } = item.snippet
      let output = {
        title,
        channelId,
        channelTitle,
        playlistId,
        publishedAt
      };
      console.log(colors.cyan(JSON.stringify(output, null, 2)));
    });
  });
};


const createPlaylist = () => {
  let youtube = google.youtube('v3');
  return new Promise((resolve, reject) => {
    const payload = {
      snippet: {
        title: "Googleapis Test Playlist",
        description: "Test Playlist created using GoogleAPIs API",
        defaultLanguage: "EN"
      },
      status: {
        privacyStatus: "public"
      }
    };
    youtube.playlists.insert({
      oauth_token: OAUTH2_TOKEN,
      key: API_KEY,
      part: 'snippet,status',
      requestBody: payload
    }).then(res => {
      resolve(res.data.id);
    })
    .catch(err => {
      console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
      reject(err.errors);
    });
  });
};

const insertPlaylistItem = (playlistID, videoID) => {
  let youtube = google.youtube('v3');
  return new Promise((resolve, reject) => {
    const payload = {
      snippet: {
        playlistId: playlistID,
        resourceId: {
          kind: "youtube#video",
          videoId: videoID
        }
      }
    };
    youtube.playlistItems.insert({
      oauth_token: OAUTH2_TOKEN,
      key: API_KEY,
      part: 'snippet,contentDetails,status',
      requestBody: payload
    }).then(res => {
      resolve(res.data.snippet.title);
    }).catch(err => {
      console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
      reject(err.errors);
    });
  });
};



const createPlaylistFromTracksFile = async () => {
  const tracksList = require('./tracks.json');
  // Create the playlist
  let playlistId;
  try {
    playlistId = await createPlaylist();
    console.log(`Playlist ${playlistId} Created.`.green);
  } catch(err) {
    console.log(`Error Creating Playlist, ${JSON.stringify(err, null, 2)}`.red);
    return;
  }
  // Create VideoIdsList
  let videoIdsList = [];
  await Promise.all(tracksList.map(async (track, i) => {
    videoIdsList.push(await searchVideo(track));
    console.log(`Track_${i}: ${videoId}`.cyan);
  }));
  console.log('This should print after search completion'.blue);
  // Iterate `VideoIdsList` & Insert the tracks in the playlist
  for(const videoId of videoIdsList) {
    try {
      const trackTitle = await insertPlaylistItem(playlistId, videoId);
      console.log(`${trackTitle} INSERTED.`.green);
    } catch(err) {
      console.log(`Error Inserting Item: ', ${JSON.stringify(err, null, 2)}`.red);
    }
  }
  console.log('This should print last'.yellow);
};


const insertTracksAsync = async (playlistId) => {
  const tracksList = require('./tracks.json');
  await asyncForEach(tracksList, async (track, i) => {
    const videoId = await searchVideo(track);
    console.log(`Track_${i}: ${videoId}`.cyan);             // Get the VideoId
    const trackTitle = await insertPlaylistItem(playlistId, videoId);  // Insert the Track to the List
    console.log(`${trackTitle} INSERTED.`.green);
  });
  console.log('This should print last'.magenta);
};


const insertTracksAsyncNew = async (playlistId) => {
  const tracksList = require('./tracks.json');
  let videoIdsList = [];
  await Promise.all(tracksList.map(async (track, i) => {
    let videoId = await searchVideo(track);
    videoIdsList.push(videoId);
    console.log(`Track_${i}: ${videoId}`.cyan);
  }));
  console.log('This should print after search completion'.blue);
  for(const videoId of videoIdsList) {
    try {
      const trackTitle = await insertPlaylistItem(playlistId, videoId);
      console.log(`${trackTitle} INSERTED.`.green);
    } catch(err) {
      console.log(`Error Inserting Item: ', ${JSON.stringify(err, null, 2)}`.red);
    }
  }
  console.log('This should print last'.yellow);
};