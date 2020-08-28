const express = require('express');
const router = express.Router();
const {
  authorize,
  receiveAuthorizationCode,
  getChannelById,
  getUserChannel,
  getDudePerfectChannel,
  searchVideo
} = require('../controllers/channel.controller');
const { isUserAuthorized } = require('../utils/customMiddleware');


router.get('/authorize', authorize);

router.get('/receiveCode', receiveAuthorizationCode);

router.get('/' ,isUserAuthorized, getChannelById);

router.get('/me', isUserAuthorized, getUserChannel);

router.get('/dudeperfect', isUserAuthorized, getDudePerfectChannel);

router.get('/search', isUserAuthorized, searchVideo);


module.exports = router;