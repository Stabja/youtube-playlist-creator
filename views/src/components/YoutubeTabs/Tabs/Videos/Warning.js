import React from 'react';

const Warning = () => {
  return (
    <div className="kt-form__body">
      <div
        className="alert alert-solid-danger alert-bold fade show kt-margin-b-20"
        role="alert"
      >
        <div className="alert-icon">
          <i className="fa fa-exclamation-triangle"></i>
        </div>
        <div className="alert-text">
          Configure user passwords to expire periodically.
          <br />
          Users will need warning that their passwords are going to expire, or
          they might inadvertently get locked out of the system!
        </div>
        <div className="alert-close">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="la la-close"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
