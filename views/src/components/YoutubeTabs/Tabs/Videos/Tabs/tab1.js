import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';
import { fetchLikedVideos } from '../../../../../api/requests';


const Tab1 = (props) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(fetchLikedVideos());
  }, []);

  return (
    <div className="tab-pane active" id="kt_widget5_tab1_content" aria-expanded="true">
      <div className="kt-widget5">
        <div className="row">
          <div className="col-sm-8">
            {videos ? videos.map(video => {
              return (
                <VideoItem
                  key={video.videoId}
                  video={video} 
                />
              )
            }) : <p>Fetching Videos....</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

Tab1.propTypes = {
  videos: PropTypes.array
};

export default Tab1;
