import React from 'react';
import PropTypes from 'prop-types';


const VideoItem = props => {
  const { 
    videoId,
    thumbnail,
    title,
    description,
    channelTitle,
    publishedAt,
    views,
    likes
  } = props.video;

  return (
    <div className="kt-widget5__item">
      <div className="kt-widget5__content">
        <div className="kt-widget5__pic">
          <img
            className="kt-widget7__img"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="kt-widget5__section">
          <a href={`https://www.youtube.com/watch?v=${videoId}`} className="kt-widget5__title">
            {title}
          </a>
          <p className="kt-widget5__desc">{description.substring(0, 100)}</p>
          <div className="kt-widget5__info">
            <span>Channel:</span>
            <span className="kt-font-info">{channelTitle}</span>
            <span>Published:</span>
            <span className="kt-font-info">{publishedAt}</span>
          </div>
        </div>
      </div>
      <div className="kt-widget5__content">
        <div className="kt-widget5__stats">
          <span className="kt-widget5__number">{views} </span>
          <span className="kt-widget5__sales">views</span>
        </div>
        <div className="kt-widget5__stats">
          <span className="kt-widget5__number">{likes} </span>
          <span className="kt-widget5__votes">likes</span>
        </div>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
