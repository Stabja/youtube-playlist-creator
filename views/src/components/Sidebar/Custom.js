import React from 'react';

const Custom = () => {
  return (
    <div id="sidebar-custom-section">
      <li className="kt-menu__section ">
        <h4 className="kt-menu__section-text">Custom</h4>
        <i className="kt-menu__section-icon flaticon-more-v2"></i>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu kt-menu__item--open kt-menu__item--here"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect
                  fill="#000000"
                  x="4"
                  y="4"
                  width="7"
                  height="7"
                  rx="1.5"
                />
                <path
                  d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                  fill="#000000"
                  opacity="0.3"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">Playlists</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../list-default.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 1</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../list-datatable.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 2</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../list-columns-1.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 3</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../list-columns-2.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 4</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../add-user.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 5</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="../edit-user.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Playlist 6</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  x="4"
                  y="4"
                  width="8"
                  height="16"
                />
                <path
                  d="M6,18 L9,18 C9.66666667,18.1143819 10,18.4477153 10,19 C10,19.5522847 9.66666667,19.8856181 9,20 L4,20 L4,15 C4,14.3333333 4.33333333,14 5,14 C5.66666667,14 6,14.3333333 6,15 L6,18 Z M18,18 L18,15 C18.1143819,14.3333333 18.4477153,14 19,14 C19.5522847,14 19.8856181,14.3333333 20,15 L20,20 L15,20 C14.3333333,20 14,19.6666667 14,19 C14,18.3333333 14.3333333,18 15,18 L18,18 Z M18,6 L15,6 C14.3333333,5.88561808 14,5.55228475 14,5 C14,4.44771525 14.3333333,4.11438192 15,4 L20,4 L20,9 C20,9.66666667 19.6666667,10 19,10 C18.3333333,10 18,9.66666667 18,9 L18,6 Z M6,6 L6,9 C5.88561808,9.66666667 5.55228475,10 5,10 C4.44771525,10 4.11438192,9.66666667 4,9 L4,4 L9,4 C9.66666667,4 10,4.33333333 10,5 C10,5.66666667 9.66666667,6 9,6 L6,6 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">Channels</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li className="kt-menu__item " aria-haspopup="true">
              <a
                href="pages/wizard/wizard-1.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Channel 1</span>
              </a>
            </li>
            <li className="kt-menu__item" aria-haspopup="true">
              <a
                href="pages/wizard/wizard-2.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Channel 2</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a
                href="pages/wizard/wizard-3.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">channel 3</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a
                href="pages/wizard/wizard-4.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Channel 4</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default Custom;
