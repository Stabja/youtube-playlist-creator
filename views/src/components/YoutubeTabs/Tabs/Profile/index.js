// eslint-disable-jsx-a11y/anchor-is-valid
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
      <div className="kt-grid__item kt-app__toggle kt-grid__item--fluid kt-app__content">
        <div className="row">
          <div className="col col-md-3">
            <ChannelInfo />
          </div>
          <div className="col col-md-9">
            <ChannelContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
