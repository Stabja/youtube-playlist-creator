let { google } = require('googleapis');
let OAuth2 = google.auth.OAuth2;
const colors = require('colors');
const {
  setRefreshTokenListener,
  generateAuthUrl
} = require('../helpers/channelHelper');
const {
  readCredentialsFromFile,
  writeCredentialsToFile
} = require('../utils/globalUtils');
let {
  getToken,
  credentials
} = require('../config/constants');
let oauth2Client = null;



exports.authorize = async (req, res) => {
  let CLIENT_ID = credentials.client_id;
  let CLIENT_SECRET = credentials.client_secret;
  let REDIRECT_URI = credentials.redirect_uris[0];
  oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  setRefreshTokenListener(oauth2Client);
  let responseJson = {};
  if(getToken() === null){  //Check if token already exists or not.
    let authCode;
    try {
      authCode = await generateAuthUrl(oauth2Client);
      return res.json({ code: authCode });
    } catch(err) {
      return res.status(500).json(err);
    }
  }
  const token = await readCredentialsFromFile();
  let refreshedToken;
  try {
    let newToken = await oauth2Client.refreshToken(token.refresh_token);
    refreshedToken = newToken.res.data;
  } catch(err) {
    console.log(`${err.errors}`.red);
  }
  refreshedToken.refresh_token = token.refresh_token;
  oauth2Client.credentials = refreshedToken;
  writeCredentialsToFile(refreshedToken);
  responseJson = refreshedToken;
  responseJson.status = "Token Refreshed";
  console.log(`${JSON.stringify(oauth2Client.credentials, null, 2)}`.magenta);
  return res.json(responseJson);
};


exports.receiveAuthorizationCode = (req, res) => {
  const code = req.query.code;
  console.log(`${code}`.green);
  if(oauth2Client === null){
    return res.status(500).json('Client is null');
  }
  oauth2Client.getToken(code, function(err, token) {
    if (err) {
      console.log(`Error retrieving access token: ${err}`.red);
      return res.status(500).json(err);
    }
    //console.log(`Token Obtained: ${JSON.stringify(token, null, 2)}`.green);
    oauth2Client.setCredentials(token);
    writeCredentialsToFile(token);
    responseJson = token;
    responseJson.status = "New Token Obtained";
    return res.json(responseJson);
  });
};


exports.getChannelById = async (req, res) => {
  let service = google.youtube('v3');
  let response;
  try {
    response = await service.channels.list({
      oauth_token: req.accessToken,
      key: req.query.key,
      id: req.query.id,
      part: req.query.part
    });
  } catch(err) {
    console.log(`${err}`.red);
    const { code, errors } = err;
    if(!code){
      return res.status(500).json({ error: err });
    }
    return res.status(code).json({ code, errors });
  }
  return res.json(response.data);
};


exports.getUserChannel = (req, res) => {
  let service = google.youtube('v3');
  console.log(req.accessToken);
  service.channels.list({
    oauth_token: req.accessToken,
    key: req.query.key,
    part: req.query.part,
    mine: req.query.mine
  }, (err, response) => {
    if (err) {
      console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
      const { code, errors } = err;
      return res.status(500).json({ code, errors });
    }
    let channels = response.data.items;
    if (channels.length == 0) {
      console.log('No channel found.');
    } else {
      console.log(colors.cyan(JSON.stringify(channels[0].statistics, null, 2)));
    }
    return res.json(response.data);
  });
};


exports.getDudePerfectChannel = (req, res) => {
  let service = google.youtube('v3');
  service.channels.list({
    oauth_token: req.accessToken,
    key: req.query.key,
    id: 'UCRijo3ddMTht_IHyNSNXpNQ',
    part: req.query.part,
  }, (err, response) => {
    if (err) {
      console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
      return res.status(500).json({ error: err });
    }
    return res.json(response.data);
  });
};


exports.searchVideo = async (req, res) => {
  let youtube = google.youtube('v3');
  let response;
  try {
    response = await youtube.search.list({
      oauth_token: req.accessToken,
      key: req.query.key,
      part: req.query.part,
      order: req.query.order,
      q: req.query.q,
      type: req.query.type,
      videoDefinition: req.query.videoDefinition
    });
  } catch(err) {
    console.log(`${err}`.red);
    const { code, errors } = err;
    if(!code){
      return res.status(500).json({ error: err });
    }
    return res.status(code).json({ code, errors });
  }
  return res.json(response.data);
};