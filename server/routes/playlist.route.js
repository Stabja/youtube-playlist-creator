const express = require('express');
const router = express.Router();
const {
  getUserPlaylists,
  getPlaylistsByChannelId,
  getPlaylistById,
  createNewPlaylist,
  createPlaylistFromTracksFile
} = require('../controllers/playlist.controller');
const { isUserAuthorized } = require('../utils/customMiddleware');


router.get('/me', isUserAuthorized, getUserPlaylists);

router.get('/bychannel', isUserAuthorized,  getPlaylistsByChannelId);

router.get('/', isUserAuthorized, getPlaylistById);

router.post('/create', isUserAuthorized, createNewPlaylist);

router.post('/from-tracks', isUserAuthorized, createPlaylistFromTracksFile);


module.exports = router;