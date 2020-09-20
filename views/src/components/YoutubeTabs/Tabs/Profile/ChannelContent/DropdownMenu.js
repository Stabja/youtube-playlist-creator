// eslint-disable-jsx-a11y/anchor-is-valid
import React from 'react';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right">
      <ul className="kt-nav">
        <li className="kt-nav__section kt-nav__section--first">
          <span className="kt-nav__section-text">Export Tools</span>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon la la-print"></i>
            <span className="kt-nav__link-text">Print</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon la la-copy"></i>
            <span className="kt-nav__link-text">Copy</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon la la-file-excel-o"></i>
            <span className="kt-nav__link-text">Excel</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon la la-file-text-o"></i>
            <span className="kt-nav__link-text">CSV</span>
          </a>
        </li>
        <li className="kt-nav__item">
          <a href="/#" className="kt-nav__link">
            <i className="kt-nav__link-icon la la-file-pdf-o"></i>
            <span className="kt-nav__link-text">PDF</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
