// eslint-disable-jsx-a11y/anchor-is-valid
import React from 'react';
import InfoIcon from './Icons/InfoIcon';


const DropdownMenu = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
      <ul className="kt-nav">
        <li className="kt-nav__head">
          Export Options
          <InfoIcon />
        </li>
        <li className="kt-nav__separator"></li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon flaticon2-drop"></i>
            <span className="kt-nav__link-text">Activity</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon flaticon2-calendar-8"></i>
            <span className="kt-nav__link-text">FAQ</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon flaticon2-telegram-logo"></i>
            <span className="kt-nav__link-text">Settings</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon flaticon2-new-email"></i>
            <span className="kt-nav__link-text">Support</span>
            <span className="kt-nav__link-badge">
              <span className="kt-badge kt-badge--success kt-badge--rounded">5</span>
            </span>
          </a>
        </li>
        <li className="kt-nav__separator"></li>
        <li className="kt-nav__foot">
          <a className="btn btn-label-danger btn-bold btn-sm" href="/#">Upgrade plan</a>
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
    </div>
  );
};

export default DropdownMenu;
