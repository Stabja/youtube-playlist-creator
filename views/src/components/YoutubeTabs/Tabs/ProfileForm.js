import React from 'react';

const ProfileForm = () => {
  return (
    <form className="kt-form kt-form--label-right" action="#">
      <div className="kt-form__body">
        <div className="kt-section kt-section--first">
          <div className="kt-section__body">
            <div className="row">
              <label className="col-xl-3"></label>
              <div className="col-lg-9 col-xl-6">
                <h3 className="kt-section__title kt-section__title-sm">
                  Personal Info:
                </h3>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">Photo</label>
              <div className="col-lg-9 col-xl-6">
                <div
                  className="kt-avatar kt-avatar--outline"
                  id="kt_contacts_edit_avatar"
                >
                  <div
                    className="kt-avatar__holder"
                    style={{
                      backgroundImage: "url('assets/media/users/100_12.jpg')",
                    }}
                  ></div>
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
              <label className="col-xl-3 col-lg-3 col-form-label">
                First Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control" type="text" value="Nick" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Last Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control" type="text" value="Bold" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Company Name
              </label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control" type="text" value="Loop Inc." />
                <span className="form-text text-muted">
                  If you want your invoices addressed to a company. Leave blank
                  to use your full name.
                </span>
              </div>
            </div>
            <div className="row">
              <label className="col-xl-3"></label>
              <div className="col-lg-9 col-xl-6">
                <h3 className="kt-section__title kt-section__title-sm">
                  Contact Info:
                </h3>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Contact Phone
              </label>
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
                    value="+35278953712"
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
                    value="nick.bold@loop.com"
                    placeholder="Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="form-group form-group-last row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Company Site
              </label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="loop"
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
  );
};

export default ProfileForm;
