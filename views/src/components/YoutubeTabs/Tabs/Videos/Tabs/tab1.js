import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';


const Tab1 = (props) => {
  const { videos } = props;

  return (
    <div className="tab-pane active" id="kt_widget5_tab1_content" aria-expanded="true">
      <div className="kt-widget5">
        <div className="row">
          <div className="col-sm-8">
            <VideoItem video={videos[0]} />
            <VideoItem video={videos[1]} />
            <VideoItem video={videos[2]} />
            <VideoItem video={videos[3]} />
            <VideoItem video={videos[4]} />
            <VideoItem video={videos[5]} />
            <VideoItem video={videos[6]} />
            <VideoItem video={videos[7]} />
            <VideoItem video={videos[8]} />
          </div>
        </div>
      </div>
    </div>
  );
};

Tab1.propTypes = {
  videos: PropTypes.array.isRequired
};

export default Tab1;
