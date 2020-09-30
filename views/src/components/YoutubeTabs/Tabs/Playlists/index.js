import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../Videos/VideoItem';


const Playlists = () => {
  const PLAYLISTS = [
    {
      thumbnail: 'assets/media/products/product27.jpg',
      title: 'Great Logo Design',
      description: 'Metronic admin themes',
      channel: 'Keenthemes',
      publishedAt: '23.08.17',
      views: '19,200',
      likes: '1046',
    },
    {
      thumbnail: 'assets/media/products/product22.jpg',
      title: 'Branding Mockup',
      description: 'Metronic bootstrap themes',
      channel: 'Logodudes',
      publishedAt: '15.04.18',
      views: '24,583',
      likes: '3809',
    },
    {
      thumbnail: 'assets/media/products/product15.jpg',
      title: 'Awesome Mobile App',
      description: 'Metronic admin themes.Lorem Ipsum Amet',
      channel: 'Flythemes',
      publishedAt: '21.06.18',
      views: '210,054',
      likes: '1103',
    },
    {
      thumbnail: 'assets/media/products/product10.jpg',
      title: 'Great Logo Design',
      description: 'Metronic admin themes',
      channel: 'Keenthemes',
      publishedAt: '23.08.17',
      views: '19,200',
      likes: '1046',
    },
    {
      thumbnail: 'assets/media/products/product11.jpg',
      title: 'Branding Mockup',
      description: 'Metronic bootstrap themes',
      channel: 'Logodudes',
      publishedAt: '15.04.18',
      views: '24,583',
      likes: '3809',
    },
    {
      thumbnail: 'assets/media/products/product6.jpg',
      title: 'Awesome Mobile App',
      description: 'Metronic admin themes.Lorem Ipsum Amet',
      channel: 'Flythemes',
      publishedAt: '21.06.18',
      views: '210,054',
      likes: '1103',
    },
    {
      thumbnail: 'assets/media/products/product11.jpg',
      title: 'Great Logo Design',
      description: 'Metronic admin themes',
      channel: 'Keenthemes',
      publishedAt: '23.08.17',
      views: '19,200',
      likes: '1046',
    },
    {
      thumbnail: 'assets/media/products/product6.jpg',
      title: 'Branding Mockup',
      description: 'Metronic bootstrap themes',
      channel: 'Logodudes',
      publishedAt: '15.04.18',
      views: '24,583',
      likes: '3809',
    },
    {
      thumbnail: 'assets/media/products/product10.jpg',
      title: 'Awesome Mobile App',
      description: 'Metronic admin themes.Lorem Ipsum Amet',
      channel: 'Flythemes',
      publishedAt: '21.06.18',
      views: '210,054',
      likes: '1103',
    },
  ];

  useEffect(() => {
    const getUserPlaylists = () => {

    }

    getUserPlaylists()
  }, []);

  return (
    <div className="tab-pane" id="kt_contacts_view_tab_3" role="tabpanel">
      <div className="kt-widget5">
        <div className="row">
          <div className="col-sm-6">
            <VideoItem video={PLAYLISTS[0]} />
            <VideoItem video={PLAYLISTS[1]} />
            <VideoItem video={PLAYLISTS[2]} />
            <VideoItem video={PLAYLISTS[3]} />
            <VideoItem video={PLAYLISTS[4]} />
            <VideoItem video={PLAYLISTS[5]} />
            <VideoItem video={PLAYLISTS[6]} />
            <VideoItem video={PLAYLISTS[7]} />
            <VideoItem video={PLAYLISTS[8]} />
          </div>
          <div className="col-sm-6">
            <div className="kt-portlet__body kt-portlet__body--fit">
              <div className="kt-datatable" id="kt_datatable_latest_orders"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array
}

export default Playlists;
