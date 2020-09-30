const express = require('express');
const router = express.Router();
const {
  getVideoById,
  getMultipleVideosById,
  getVideosLikedByUser,
  getVideosDislikedByUser,
  getMostPopularMusicVideos,
  getMostPopularSportsVideos,
  getMostPopularGamingVideos,
  getMostPopularEntertainmentVideos
} = require('../controllers/video.controller');
const { isUserAuthorized } = require('../utils/customMiddleware');


router.get('/:id', isUserAuthorized, getVideoById);

router.get('/', isUserAuthorized, getMultipleVideosById);

router.get('/me/liked', isUserAuthorized, getVideosLikedByUser);

router.get('/me/disliked', isUserAuthorized, getVideosDislikedByUser);

router.get('/mostpopular/music', isUserAuthorized, getMostPopularMusicVideos);

router.get('/mostpopular/sports', isUserAuthorized, getMostPopularSportsVideos);

router.get('/mostpopular/gaming', isUserAuthorized, getMostPopularGamingVideos);

router.get('/mostpopular/entertainment', isUserAuthorized, getMostPopularEntertainmentVideos);


module.exports = router;