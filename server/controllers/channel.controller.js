const fs = require('fs');
let { google } = require('googleapis');
let OAuth2 = google.auth.OAuth2;
const colors = require('colors');
const {
  setRefreshTokenListener,
  generateAuthUrl
} = require('./channelHelper');
const {
  readCredentialsFromFile,
  writeCredentialsToFile
} = require('../utils/globalUtils');
let { 
  getToken } = require('../config/constants');
const { credentials } = require('../config/client_secret_2');
let oauth2Client = null;


module.exports = {

  authorize: async (req, res) => {
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
    const CREDENTIALS = await readCredentialsFromFile();
    oauth2Client.credentials = CREDENTIALS;
    responseJson = CREDENTIALS;
    responseJson.status = "Token Already Exists";
    console.log(`${JSON.stringify(oauth2Client, null, 2)}`.magenta);
    return res.json(responseJson);
  },

  receiveAuthorizationCode: (req, res) => {
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
      console.log(`Token Obtained: ${JSON.stringify(token, null, 2)}`.green);
      oauth2Client.setCredentials(token);
      writeCredentialsToFile(token);
      responseJson = token;
      responseJson.status = "New Token Obtained";
      return res.json(responseJson);
    });
  },

  getChannelById: async (req, res) => {
    let service = google.youtube('v3');
    let response;
    try {
      response = await service.channels.list({
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
  },

  getChannelDetailsOfUser: (req, res) => {
    let service = google.youtube('v3');
    console.log(req.idToken);
    service.channels.list({
      oauth_token: req.idToken,
      key: req.query.key,
      part: req.query.part,
      mine: req.query.mine
    }, (err, response) => {
      if (err) {
        console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
        return res.status(500).json({ error: err });
      }
      let channels = response.data.items;
      if (channels.length == 0) {
        console.log('No channel found.');
      } else {
        console.log(colors.cyan(JSON.stringify(channels[0].statistics, null, 2)));
      }
      return res.json(response.data);
    });
  },

  getDudePerfectChannel: (req, res) => {
    let service = google.youtube('v3');
    service.channels.list({
      key: req.query.key,
      id: 'UCRijo3ddMTht_IHyNSNXpNQ',
      part: req.query.part,
    }, (err, response) => {
      if (err) {
        console.log(`${JSON.stringify(err.errors, null, 2)}`.red);
        return res.status(500).json({ error: err });
      }
      //let channels = res.data;
      //console.log(`${JSON.stringify(channels, null, 2)}`.yellow);
      return res.json(response.data);
    });
  },

  searchVideo: async (req, res) => {
    let youtube = google.youtube('v3');
    let response;
    try {
      response = await youtube.search.list({
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
  }

};
