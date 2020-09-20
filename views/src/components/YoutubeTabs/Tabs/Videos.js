import React from 'react';

const Videos = () => {
  return (
    <div className="tab-pane" id="kt_contacts_view_tab_2" role="tabpanel">
      <form className="kt-form kt-form--label-right">
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
              Users will need warning that their passwords are going to expire,
              or they might inadvertently get locked out of the system!
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
          <div className="kt-section">
            <div className="kt-section__body">
              <div className="row">
                <label className="col-xl-3"></label>
                <div className="col-lg-9 col-xl-6">
                  <h3 className="kt-section__title kt-section__title-sm">
                    Account:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Username
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-spinner kt-spinner--sm kt-spinner--success kt-spinner--right kt-spinner--input">
                    <input
                      className="form-control"
                      type="text"
                      value="nick84"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Email Address
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="la la-at"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      value="nick.watson@loop.com"
                      placeholder="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <span className="form-text text-muted">
                    Email will not be publicly displayed.{' '}
                    <a href="/#" className="kt-link">
                      Learn more
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Language
                </label>
                <div className="col-lg-9 col-xl-6">
                  <select className="form-control">
                    <option>Select Language...</option>
                    <option value="ca">Català - Catalan</option>
                    <option value="cs">Čeština - Czech</option>
                    <option value="mr">मराठी - Marathi</option>
                    <option value="hi">हिन्दी - Hindi</option>
                    <option value="bn">বাংলা - Bangla</option>
                    <option value="gu">ગુજરાતી - Gujarati</option>
                    <option value="ta">தமிழ் - Tamil</option>
                    <option value="kn">ಕನ್ನಡ - Kannada</option>
                    <option value="th">ภาษาไทย - Thai</option>
                    <option value="ko">한국어 - Korean</option>
                    <option value="ja">日本語 - Japanese</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Time Zone
                </label>
                <div className="col-lg-9 col-xl-6">
                  <select className="form-control">
                    <option
                      data-offset="-39600"
                      value="International Date Line West"
                    >
                      (GMT-11:00) International Date Line West
                    </option>
                    <option data-offset="-39600" value="Midway Island">
                      (GMT-11:00) Midway Island
                    </option>
                    <option data-offset="-39600" value="Samoa">
                      (GMT-11:00) Samoa
                    </option>
                    <option data-offset="-36000" value="Hawaii">
                      (GMT-10:00) Hawaii
                    </option>
                    <option data-offset="-28800" value="Alaska">
                      (GMT-08:00) Alaska
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group form-group-last row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Communication
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-checkbox-inline">
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="" readOnly/> Email
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="" readOnly/> SMS
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" /> Phone
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kt-separator kt-separator--border-dashed kt-separator--portlet-fit kt-separator--space-lg"></div>
          <div className="kt-section kt-section--first">
            <div className="kt-section__body">
              <div className="row">
                <label className="col-xl-3"></label>
                <div className="col-lg-9 col-xl-6">
                  <h3 className="kt-section__title kt-section__title-sm">
                    Security:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Login verification
                </label>
                <div className="col-lg-9 col-xl-6">
                  <button
                    type="button"
                    className="btn btn-label-brand btn-bold btn-sm kt-margin-t-5 kt-margin-b-5"
                  >
                    Setup login verification
                  </button>
                  <span className="form-text text-muted">
                    After you log in, you will be asked for additional
                    information to confirm your identity and protect your
                    account from being compromised.
                    <a href="/#" className="kt-link">
                      Learn more
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Password reset verification
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-checkbox-single">
                    <label className="kt-checkbox">
                      <input type="checkbox" /> Require personal information to
                      reset your password.
                      <span></span>
                    </label>
                  </div>
                  <span className="form-text text-muted">
                    For extra security, this requires you to confirm your email
                    or phone number when you reset your password.
                    <a href="/#" className="kt-link">
                      Learn more
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className="form-group row kt-margin-t-10 kt-margin-b-10">
                <label className="col-xl-3 col-lg-3 col-form-label"></label>
                <div className="col-lg-9 col-xl-6">
                  <button
                    type="button"
                    className="btn btn-label-danger btn-bold btn-sm kt-margin-t-5 kt-margin-b-5"
                  >
                    Deactivate your account ?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kt-separator kt-separator--space-lg kt-separator--fit kt-separator--border-solid"></div>
        <div className="kt-form__actions">
          <div className="row">
            <div className="col-xl-3"></div>
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
