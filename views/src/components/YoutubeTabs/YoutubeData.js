import React from 'react';

// Components
import Profile from './Tabs/Profile/index';
import Videos from './Tabs/Videos';
import Playlists from './Tabs/Playlists';
import Channels from './Tabs/Channels';

const YoutubeData = () => {
  return (
    <div className="kt-portlet kt-portlet--tabs">
      <div className="kt-portlet__head">
        <div className="kt-portlet__head-toolbar">
          <ul
            className="nav nav-tabs nav-tabs-space-lg nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#kt_contacts_view_tab_1"
                role="tab"
              >
                <i className="flaticon2-calendar-3"></i> Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                data-toggle="tab"
                href="#kt_contacts_view_tab_2"
                role="tab"
              >
                <i className="flaticon2-user-outline-symbol"></i> Videos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#kt_contacts_view_tab_3"
                role="tab"
              >
                <i className="flaticon2-gear"></i> Playlists
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                data-toggle="tab"
                href="#kt_contacts_view_tab_4"
                role="tab"
              >
                <i className="flaticon2-note"></i> Channels
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="kt-portlet__body">
        <div className="tab-content  kt-margin-t-20">
          <Profile />
          <Videos />
          <Playlists />
          <Channels />
        </div>
      </div>
    </div>
  );
};

export default YoutubeData;
