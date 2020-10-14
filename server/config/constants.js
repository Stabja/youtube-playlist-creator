const path = require('path');
let TOKEN_DIR = path.join(__dirname, '../credentials/');
let OAUTH2_TOKEN = null;
let CREDENTIALS = null;
//console.log(colors.blue({ TOKEN_DIR }));


const credentials_1 = {
  client_id: "265151996231-bv87oc4ij3r50h9qihebqpjs8dp2b2pp.apps.googleusercontent.com",
  project_id: "youtube-api-286518",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "vUv7kJSgYyFmrQJ3K_5qTUgK",
  redirect_uris: [
    "http://localhost:3080/channels/receiveCode"
  ]
};

const credentials_2 = {
  client_id: "262127108908-pd6e621fqsnercr51s2e48m3kpe7r2ht.apps.googleusercontent.com",
  project_id: "decisive-force-286519",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "BXOeIlpZ7OO9WKhiolwYLg_s",
  redirect_uris: [
    "http://localhost:3080/channels/receiveCode"
  ]
};

const credentials_3 = {
  client_id: "71407672546-eekmlp23l0hbgu0kjkv092ialf3svuip.apps.googleusercontent.com",
  project_id: "youtube-data-api-3-286715",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "7zWSYAyvpmxR_Jy0Smk7X7t-",
  redirect_uris: [
    "http://localhost:3080/channels/receiveCode"
  ]
};

const credentials_4 = {
  client_id: "121084122420-f63drdf86kl9laqk5pe5ri1gf5ivpuun.apps.googleusercontent.com",
  project_id: "iconic-computer-286715",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "UQZtkQjoyAILCSmUdO4GYFDo",
  redirect_uris: [
    "http://localhost:3080/channels/receiveCode"
  ]
};

const credentials_5 = {
  client_id: "973133168435-ts8moqhute4iq839t46m6jg0mc70scop.apps.googleusercontent.com",
  project_id: "youtube-data-api-5-286717",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "3ECCXZqeig6bX5izPZM48YFa",
  redirect_uris: [
    "http://localhost:3080/channels/receiveCode"
  ]
};


module.exports = {
  credentials: credentials_2,
  SCOPES: [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube'
  ],
  TOKEN_DIR,
  TOKEN_PATH: TOKEN_DIR + 'access_token.json',
  API_KEY: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
  DUDEPERFECT_CHANNEL_ID: 'UCRijo3ddMTht_IHyNSNXpNQ',
  USER_CHANNEL_ID: 'UCVHXm9tFq8TnYkpeIq4MyDw',
  CHANNEL_FULL_RESPONSE_PART: 'snippet,statistics,brandingSettings,auditDetails,contentDetails,contentOwnerDetails,id,localizations,status,topicDetails',
  CHANNEL_RESPONSE_PART: 'snippet,contentDetails,statistics,brandingSettings,localizations,status,topicDetails',
  PLAYLIST_ID: 'PLWXEpzKs5gtMObzkIPdCYq4KFVrVx90TQ',
  PLAYLIST_FULL_RESPONSE_PART: 'snippet,id,localizations,player,contentDetails,status',
  PLAYLIST_RESPONSE_PART: 'snippet,contentDetails',
  CREATE_PLAYLIST_RESPONSE_PART: 'snippet,status,contentDetails,localizations,player',
  PLAYLIST_SNIPPET_PART: 'snippet',
  VIDEOS_RESPONSE_PART: 'snippet,statistics,contentDetails,status',
  VIDEOS_RESPONSE_PART_LESS: 'snippet,statistics,status',
  VIDEOS_SNIPPET_PART: 'snippet',
  VIDEOS_STATISTICS_PART: 'statistics',
  VIDEOS_CONTENT_PART: 'contentDetails',
  OAUTH2_TOKEN,
  CREDENTIALS,
  setToken: (token) => {
    OAUTH2_TOKEN = token !== null ? token.access_token : null;
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