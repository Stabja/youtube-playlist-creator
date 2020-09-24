import React from 'react';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';

const Videos = () => {
  const VIDEOS = [
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

  return (
    <div className="tab-pane kt-negative-spacing--3" id="kt_contacts_view_tab_2" role="tabpanel">
      <form className="kt-form2">
        <div className="kt-form__content">
          <div className="kt-videotab__head">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#kt_widget5_tab1_content"
                  role="tab"
                >
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab2_content"
                  role="tab"
                >
                  This Month
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab3_content"
                  role="tab"
                >
                  All time
                </a>
              </li>
            </ul>
          </div>
          <div className="kt-separator-2"></div>
          <div className="kt-videotab__body">
            <div className="tab-content">
              <Tab1 videos={VIDEOS} />
              <Tab2 videos={VIDEOS} />
              <Tab3 videos={VIDEOS} />
            </div>
          </div>
        </div>
        <div className="kt-separator"></div>
        <div className="kt-form__actions">
          <div className="row">
            <div className="col-lg-9 col-xl-6">
              <a href="/#" className="btn btn-brand btn-bold">
                Save changes
              </a>
              <a href="/#" className="btn btn-clean btn-bold">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Videos;
