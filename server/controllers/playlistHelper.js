const { google } = require('googleapis');
const { SCOPES } = require('../config/constants');
const { asyncForEach } = require('../utils/globalUtils');


module.exports = {

  getErrorCode: (err) => {
    return err.code ? err.code : 500
  },

  createPlaylist: (accessToken, apiKey, playlistTitle, playlistDescription) => {
    let youtube = google.youtube('v3');
    return new Promise((resolve, reject) => {
      const payload = {
        snippet: {
          title: playlistTitle,
          description: playlistDescription,
          defaultLanguage: "EN"
        },
        status: {
          privacyStatus: "public"
        }
      };
      youtube.playlists.insert({
        oauth_token: accessToken,
        key: apiKey,
        part: 'snippet,status',
        requestBody: payload
      }).then(res => {
        resolve(res.data.id);
      })
      .catch(err => {
        console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
        reject({
          code: err.code,
          errors: err.errors
        });
      });
    });
  },

  searchVideo: (accessToken, apiKey, query) => {
    let youtube = google.youtube('v3');
    return new Promise((resolve, reject) => {
      youtube.search.list({
        oauth_token: accessToken,
        key: apiKey,
        part: 'snippet',
        order: 'relevance',
        q: query,
        type: 'video',
        videoDefinition: 'high'
      }).then(res => {
        let videoId = res.data.items[0].id.videoId;
        resolve(videoId);
      }).catch(err => {
        console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
        reject(err.errors);
      });
    });
  },

  insertPlaylistItem: (accessToken, apiKey, playlistID, videoID) => {
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
        oauth_token: accessToken,
        key: apiKey,
        part: 'snippet,contentDetails,status',
        requestBody: payload
      }).then(res => {
        resolve(res.data.snippet.title);
      }).catch(err => {
        console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
        reject({
          code: err.code,
          errors: err.errors
        });
      });
    });
  },

  insertTracksAsync: async (playlistId) => {
    const tracksList = require('./tracks.json');
    await asyncForEach(tracksList, async (track, i) => {
      const videoId = await searchVideo(track);
      console.log(`Track_${i}: ${videoId}`.cyan);             // Get the VideoId
      const trackTitle = await insertPlaylistItem(playlistId, videoId);  // Insert the Track to the List
      console.log(`${trackTitle} INSERTED.`.green);
    });
    console.log('This should print last'.magenta);
  },
  
  insertTracksAsyncNew: async (playlistId) => {
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
  }

}