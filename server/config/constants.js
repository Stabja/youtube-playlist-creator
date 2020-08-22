const colors = require('colors');
const path = require('path');
let TOKEN_DIR = path.join(__dirname, '../.credentials/');
let OAUTH2_TOKEN = null;
let CREDENTIALS = null;

console.log(colors.blue({ TOKEN_DIR }));

module.exports = {
  SCOPES: [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube'
  ],
  TOKEN_DIR,
  TOKEN_PATH: TOKEN_DIR + 'youtube-nodejs-quickstart.json',
  API_KEY: 'AIzaSyDa2TpZA7CHVzYfPa-FDjtEfLGV8x8jTcw',
  DUDEPERFECT_CHANNEL_ID: 'UCRijo3ddMTht_IHyNSNXpNQ',
  USER_CHANNEL_ID: 'UCVHXm9tFq8TnYkpeIq4MyDw',
  CHANNEL_RESPONSE_PART: 'snippet,contentDetails,statistics,brandingSettings,localizations,status,topicDetails',
  PLAYLIST_ID: 'PLWXEpzKs5gtMObzkIPdCYq4KFVrVx90TQ',
  PLAYLIST_RESPONSE_PART: 'snippet,contentDetails',
  OAUTH2_TOKEN,
  CREDENTIALS,
  setToken: (token) => {
    OAUTH2_TOKEN = token.access_token;
    CREDENTIALS = token;
  },
  getToken: () => {
    return OAUTH2_TOKEN;
  },
  getCredentials: () => {
    return CREDENTIALS;
  },
  clearToken: () => {
    OAUTH2_TOKEN = null;
    CREDENTIALS = null;
  }
};