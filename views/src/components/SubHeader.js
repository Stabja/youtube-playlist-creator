import React from 'react';

const SubHeader = () => {
  return (
    <div className="kt-subheader kt-grid__item" id="kt_subheader">
      <div className="kt-container  kt-container--fluid ">
        <div className="kt-subheader__main">
          <h3 className="kt-subheader__title">
            <button
              className="kt-subheader__mobile-toggle kt-subheader__mobile-toggle--left"
              id="kt_subheader_mobile_toggle"
            >
              <span></span>
            </button>
            Profile 1
          </h3>
          <span className="kt-subheader__separator kt-hidden"></span>
          <div className="kt-subheader__breadcrumbs">
            <a href="/#" className="kt-subheader__breadcrumbs-home">
              <i className="flaticon2-shelter"></i>
            </a>
            <span className="kt-subheader__breadcrumbs-separator"></span>
            <a href="/#" className="kt-subheader__breadcrumbs-link">
              Apps{' '}
            </a>
            <span className="kt-subheader__breadcrumbs-separator"></span>
            <a href="/#" className="kt-subheader__breadcrumbs-link">
              Users{' '}
            </a>
            <span className="kt-subheader__breadcrumbs-separator"></span>
            <a href="/#" className="kt-subheader__breadcrumbs-link">
              Profile 1{' '}
            </a>
            <span className="kt-subheader__breadcrumbs-separator"></span>
            <a href="/#" className="kt-subheader__breadcrumbs-link">
              Personal Information{' '}
            </a>
            {/* <!-- <span className="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> --> */}
          </div>
        </div>
        <div className="kt-subheader__toolbar">
          <div className="kt-subheader__wrapper">
            <a href="/#" className="btn kt-subheader__btn-primary">
              Actions &nbsp;
              {/* <!--<i className="flaticon2-calendar-1"></i>--> */}
            </a>
            <div
              className="dropdown dropdown-inline"
              data-toggle="kt-tooltip"
              title="Quick actions"
              data-placement="left"
            >
              <a
                href="/#"
                className="btn btn-icon"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  className="kt-svg-icon kt-svg-icon--success kt-svg-icon--md"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                      fill="#000000"
                      fillRule="nonzero"
                      opacity="0.3"
                    />
                    <path
                      d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
                {/* <!--<i className="flaticon2-plus"></i>--> */}
              </a>
              <div className="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
                {/* <!--begin::Nav--> */}
                <ul className="kt-nav">
                  <li className="kt-nav__head">
                    Add anything or jump to:
                    <i
                      className="flaticon2-information"
                      data-toggle="kt-tooltip"
                      data-placement="right"
                      title="Click to learn more..."
                    ></i>
                  </li>
                  <li className="kt-nav__separator"></li>
                  <li className="kt-nav__item">
                    <a href="/#" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-drop"></i>
                      <span className="kt-nav__link-text">Order</span>
                    </a>
                  </li>
                  <li className="kt-nav__item">
                    <a href="/#" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-calendar-8"></i>
                      <span className="kt-nav__link-text">Ticket</span>
                    </a>
                  </li>
                  <li className="kt-nav__item">
                    <a href="/#" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-telegram-logo"></i>
                      <span className="kt-nav__link-text">Goal</span>
                    </a>
                  </li>
                  <li className="kt-nav__item">
                    <a href="/#" className="kt-nav__link">
                      <i className="kt-nav__link-icon flaticon2-new-email"></i>
                      <span className="kt-nav__link-text">Support Case</span>
                      <span className="kt-nav__link-badge">
                        <span className="kt-badge kt-badge--success">5</span>
                      </span>
                    </a>
                  </li>
                  <li className="kt-nav__separator"></li>
                  <li className="kt-nav__foot">
                    <a className="btn btn-label-brand btn-bold btn-sm" href="/#">
                      Upgrade plan
                    </a>
                    <a
                      className="btn btn-clean btn-bold btn-sm"
                      href="/#"
                      data-toggle="kt-tooltip"
                      data-placement="right"
                      title="Click to learn more..."
                    >
                      Learn more
                    </a>
                  </li>
                </ul>
                {/* <!--end::Nav--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
