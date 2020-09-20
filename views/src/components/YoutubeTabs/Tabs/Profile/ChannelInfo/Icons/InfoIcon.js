import React from 'react';

const InfoIcon = () => {
  return (
    <span
      data-toggle="kt-tooltip"
      data-placement="right"
      title="Click to learn more..."
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        className="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect x="0" y="0" width="24" height="24" />
          <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
          <rect fill="#000000" x="11" y="10" width="2" height="7" rx="1" />
          <rect fill="#000000" x="11" y="7" width="2" height="2" rx="1" />
        </g>
      </svg>
    </span>
  );
};

export default InfoIcon;
