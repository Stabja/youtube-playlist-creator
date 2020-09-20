import React from 'react';

const SCicon = () => {
  return (
    <span className="kt-widget__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        className="kt-svg-icon"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect x="0" y="0" width="24" height="24" />
          <rect fill="#000000" x="2" y="5" width="19" height="4" rx="1" />
          <rect
            fill="#000000"
            opacity="0.3"
            x="2"
            y="11"
            width="19"
            height="10"
            rx="1"
          />
        </g>
      </svg>{' '}
    </span>
  );
};

export default SCicon;
