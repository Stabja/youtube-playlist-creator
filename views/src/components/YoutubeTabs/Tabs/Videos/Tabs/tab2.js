import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';


const Tab2 = (props) => {
  const { videos } = props;

  return (
    <div className="tab-pane" id="kt_widget5_tab2_content">
      <div className="kt-widget5">
        <div className="row">
          <div className="col-sm-8">
            <VideoItem video={videos[3]} />
            <VideoItem video={videos[4]} />
            <VideoItem video={videos[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

Tab2.propTypes = {
  videos: PropTypes.array.isRequired
};

export default Tab2;
