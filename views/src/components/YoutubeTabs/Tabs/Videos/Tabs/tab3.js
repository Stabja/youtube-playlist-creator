import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';


const Tab3 = (props) => {
  const { videos } = props;

  return (
    <div className="tab-pane" id="kt_widget5_tab3_content">
      <div className="kt-widget5">
        <div className="row">
          <div className="col-sm-8">
            <VideoItem video={videos[6]} />
            <VideoItem video={videos[7]} />
            <VideoItem video={videos[8]} />
          </div>
        </div>
      </div>
    </div>
  );
};

Tab3.propTypes = {
  videos: PropTypes.array.isRequired
};

export default Tab3;
