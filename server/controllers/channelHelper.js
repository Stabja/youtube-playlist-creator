const fs = require('fs');
const open = require('open');
const readline = require('readline');
const colors = require('colors');
const {
  SCOPES
} = require('../config/constants');


module.exports = {

  setRefreshTokenListener: (oauth2Client) => {
    console.log('Refresh Token Listener set.'.inverse);
    oauth2Client.on('tokens', (tokens) => {
      if (tokens.refresh_token) {
        console.log(`Token Refreshed: ${tokens.refresh_token}`.inverse);
      }
      console.log(`Token Refreshed: ${tokens.access_token}`.inverse);
    });
  },

  generateAuthUrl: (oauth2Client) => {
    return new Promise(async (resolve, reject) => {
      let authUrl = await oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
      });
      console.log(colors.green(authUrl));
      let authCode;
      try {
        authCode = await open(authUrl, { wait: true });
        console.log(colors.blue({ authCode }));
        resolve(authCode);
      } catch(err) {
        reject(err);
      }
    });
  },
  
  searchVideoStandalone: async (searchQuery, callback) => {
    try {
      let videoId = await callback(searchQuery);
      console.log(`${videoId}`.yellow);
    } catch(err) {
      console.log(`${JSON.stringify(err, null, 2)}`.red);
    }
  }

};



