const express = require('express');
const router = express.Router();
const {
  authorize,
  receiveAuthorizationCode,
  getChannelById,
  getChannelDetailsOfUser,
  getDudePerfectChannel,
  searchVideo
} = require('../controllers/channel.controller');
const { isUserAuthorized } = require('../utils/customMiddleware');


router.get('/authorize', authorize);

router.get('/receiveCode', receiveAuthorizationCode);

router.get('/', getChannelById);

router.get('/me', isUserAuthorized, getChannelDetailsOfUser);

router.get('/dudeperfect', getDudePerfectChannel);

router.get('/search', searchVideo);


module.exports = router;