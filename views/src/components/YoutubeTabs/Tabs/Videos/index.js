import React from 'react';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';
import Tab4 from './Tabs/tab4';
import Tab5 from './Tabs/tab5';
import Tab6 from './Tabs/tab6';


const Videos = () => {

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
                  Liked
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab2_content"
                  role="tab"
                >
                  Disliked
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab3_content"
                  role="tab"
                >
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab4_content"
                  role="tab"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab5_content"
                  role="tab"
                >
                  Gaming
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab6_content"
                  role="tab"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
          <div className="kt-separator-2"></div>
          <div className="kt-videotab__body">
            <div className="tab-content">
              <Tab1/>
              <Tab2/>
              <Tab3/>
              <Tab4/>
              <Tab5/>
              <Tab6/>
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
