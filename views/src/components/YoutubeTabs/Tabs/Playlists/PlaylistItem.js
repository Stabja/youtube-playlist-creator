import React from 'react';
import PropTypes from 'prop-types';


const PlaylistItem = () => {
  const { thumbnail, title, description, channel, publishedAt } = props.playlist;

  return (
    <div className="kt-widget5__item">
      <div className="kt-widget5__content">
        <div className="kt-widget5__pic">
          <img
            className="kt-widget7__img"
            src={thumbnail}
            alt="cbfdbd"
          />
        </div>
        <div className="kt-widget5__section">
          <a href="#" className="kt-widget5__title">
            {title}
          </a>
          <p className="kt-widget5__desc">{description}</p>
          <div className="kt-widget5__info">
            <span>Channel:</span>
            <span className="kt-font-info">{channel}</span>
            <span>Published:</span>
            <span className="kt-font-info">{publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  playlist: PropTypes.object.isRequired
};
 
export default PlaylistItem;