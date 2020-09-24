import React from 'react';

// Components
import Sidebar from './components/Sidebar/index';
import HeaderMenu from './components/HeaderMenu';
import HeaderTopbar from './components/HeaderTopbar';
import Footer from './components/Footer';
import QuickPanel from './components/QuickPanel';
import StickyToolbar from './components/StickyToolbar';
import DemoPanel from './components/DemoPanel';
import ChatPanel from './components/ChatPanel';
import YoutubeData from './components/YoutubeTabs/YoutubeData';
/* import SubHeader from './components/SubHeader';
import AppAside from './components/YoutubeTabs/Tabs/Profile/ChannelInfo';
import AppContent from './components/YoutubeTabs/Tabs/Profile/ChannelContent'; */


const Dashboard = () => {
  return (
    <div className="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
      <div className="kt-grid kt-grid--hor kt-grid--root">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
          <Sidebar />
          <div
            className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
            id="kt_wrapper"
          >
            <div
              id="kt_header"
              className="kt-header kt-grid__item kt-header--fixed"
            >
              <HeaderMenu />
              <HeaderTopbar />
            </div>
            <div
              id="kt_content"
              className="kt-negative-spacing--6 kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            >
              <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
                  <YoutubeData />
                </div>
              </div>
            </div>
            <div
              id="kt_footer"
              className="kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop"
            >
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <QuickPanel />
      <StickyToolbar />
      <DemoPanel />
      <ChatPanel />
    </div>
  );
};

export default Dashboard;
