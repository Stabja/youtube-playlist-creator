import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';
import { fetchDislikedVideos } from '../../../../../api/requests';


const Tab2 = (props) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(fetchDislikedVideos());
  }, []);

  return (
    <div className="tab-pane" id="kt_widget5_tab2_content">
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

Tab2.propTypes = {
  videos: PropTypes.array
};

export default Tab2;
