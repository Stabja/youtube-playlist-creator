let { google } = require('googleapis');
const { 
  VIDEOS_RESPONSE_PART,
  VIDEOS_RESPONSE_PART_LESS
} = require('../config/constants');
const service = google.youtube('v3');
const { getErrorCode } = require('../utils/globalUtils');
const { createVideosList } = require('../helpers/videoHelper');



exports.getVideoById = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART,
    id: req.params.id
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    return res.json(response.data);
  });
};


exports.getMultipleVideosById = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART,
    id: req.query.id,
    maxResults: 10
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    return res.json(response.data);
  });
};


exports.getVideosLikedByUser = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART,
    myRating: 'like',
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};


exports.getVideosDislikedByUser = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART,
    myRating: 'dislike',
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};


exports.getMostPopularMusicVideos = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART_LESS,
    chart: 'mostPopular',
    videoCategoryId: 10,
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};


exports.getMostPopularSportsVideos = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART_LESS,
    chart: 'mostPopular',
    videoCategoryId: 17,
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};


exports.getMostPopularGamingVideos = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART_LESS,
    chart: 'mostPopular',
    videoCategoryId: 20,
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};


exports.getMostPopularEntertainmentVideos = (req, res) => {
  service.videos.list({
    key: req.query.key,
    oauth_token: req.accessToken,
    part: VIDEOS_RESPONSE_PART_LESS,
    chart: 'mostPopular',
    videoCategoryId: 24,
    maxResults: req.query.pageSize,
    pageToken: req.query.pageToken
  }, (err, response) => {
    if (err) {
      console.log(`The API returned an error: ${err}`.red);
      const { code, errors } = err;
      return res.status(getErrorCode(err)).json({ code, errors });
    }
    let responseJson = {};
    responseJson.videos = createVideosList(response.data.items);
    responseJson.nextPageToken = response.data.nextPageToken;
    return res.json(responseJson);
  });
};
