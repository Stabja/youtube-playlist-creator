import React from 'react';
import ChannelInfo from './ChannelInfo';
import ChannelContent from './ChannelContent';

const Profile = () => {
  return (
    <div
      className="tab-pane active kt-negative-spacing--3"
      id="kt_contacts_view_tab_1"
      role="tabpanel"
    >
      <div className="row">
        <div className="col col-md-3">
          <ChannelInfo />
        </div>
        <div className="col col-md-9">
          <ChannelContent />
        </div>
      </div>
    </div>
  );
};

export default Profile;
