
exports.createVideosList = (items) => {
  const videosList = [];
  items.map(item => {
    let video = {};
    video.videoId = item.id;
    video.channelId = item.snippet.channelId;
    video.channelTitle = item.snippet.channelTitle;
    video.thumbnail = item.snippet.thumbnails.high.url;
    video.title = item.snippet.title;
    video.description = item.snippet.description;
    video.tags = item.snippet.tags;
    video.publishedAt = item.snippet.publishedAt;
    video.views = item.statistics.viewCount;
    video.likes = item.statistics.likeCount;
    video.dislikes = item.statistics.dislikeCount;
    video.comments = item.statistics.commentCount;
    //video.duration = item.contentDetails.duration;
    //video.dimension = item.contentDetails.dimension;
    //video.definition = item.contentDetails.definition;
    video.privacyStatus = item.status.privacyStatus;
    videosList.push(video);
  });
  return videosList;
};