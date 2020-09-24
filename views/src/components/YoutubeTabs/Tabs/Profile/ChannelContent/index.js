// eslint-disable-jsx-a11y/anchor-is-valid
import React from 'react';
import axios from 'axios';
import DropdownMenu from './DropdownMenu';


const ChannelContent = () => {

  const getAuthorizationCode = () => {
    axios.get('/channels/authorize')
      .then(res => {
        console.log(res.data.code.spawnargs);
      })
      .catch(err => {
        console.log({ err });
      });
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h2 className="kt-portlet__head-title">
              Personal Information{' '}<small>update your personal informaiton</small>
            </h2>
          </div>
          <div className="kt-portlet__head-toolbar">
            <div className="kt-portlet__head-wrapper">
              <div className="dropdown dropdown-inline">
                <button
                  type="button"
                  className="btn btn-label-brand btn-sm btn-icon btn-icon-md"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="flaticon2-gear"></i>
                </button>
                <DropdownMenu />
              </div>
            </div>
          </div>
        </div>
        <form className="kt-form kt-form--label-right">
          <div className="kt-portlet__body">
            <div className="kt-section kt-section--first">
              <div className="kt-section__body">
                <div className="row">
                  <label className="col-xl-3"></label>
                  <div className="col-lg-9 col-xl-6">
                    <h3 className="kt-section__title kt-section__title-sm">
                      Customer Info:
                    </h3>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    Avatar
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div className="kt-avatar kt-avatar--outline" id="kt_user_avatar">
                      <div
                        className="kt-avatar__holder"
                        style={{ "backgroundImage": "url(assets/media/users/100_13.jpg)" }}
                      >
                      </div>
                      <label
                        className="kt-avatar__upload"
                        data-toggle="kt-tooltip"
                        title=""
                        data-original-title="Change avatar"
                      >
                        <i className="fa fa-pen"></i>
                        <input
                          type="file"
                          name="profile_avatar"
                          accept=".png, .jpg, .jpeg"
                        />
                      </label>
                      <span
                        className="kt-avatar__cancel"
                        data-toggle="kt-tooltip"
                        title=""
                        data-original-title="Cancel avatar"
                      >
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">First Name</label>
                  <div className="col-lg-9 col-xl-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
                  <div className="col-lg-9 col-xl-6">
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">Company Name</label>
                  <div className="col-lg-9 col-xl-6">
                    <input className="form-control" type="text" />
                    <span className="form-text text-muted">
                      If you want your invoices addressed to a company.
                      Leave blank to use your full name.
                    </span>
                  </div>
                </div>
     
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                  <div className="col-lg-9 col-xl-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <span className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
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
                        placeholder="Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group form-group-last row">
                  <label className="col-xl-3 col-lg-3 col-form-label">Company Site</label>
                  <div className="col-lg-9 col-xl-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kt-portlet__foot">
            <div className="kt-form__actions">
              <div className="row">
                <div className="col-lg-3 col-xl-3"></div>
                <div className="col-lg-9 col-xl-9">
                  <button 
                    type="reset" 
                    className="btn btn-success"
                    onClick={getAuthorizationCode}
                  >
                    Submit
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChannelContent;
