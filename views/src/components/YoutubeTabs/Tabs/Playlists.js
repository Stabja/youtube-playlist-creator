import React from 'react';

const Playlists = () => {
  return (
    <div className="tab-pane" id="kt_contacts_view_tab_3" role="tabpanel">
      <form className="kt-form kt-form--label-right">
        <div className="kt-form__body">
          <div className="kt-section kt-section--first">
            <div className="kt-section__body">
              <div className="row">
                <label className="col-xl-3"></label>
                <div className="col-lg-9 col-xl-6">
                  <h3 className="kt-section__title kt-section__title-sm">
                    Setup Email Notification:
                  </h3>
                </div>
              </div>
              <div className="form-group form-group-sm row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Email Notification
                </label>
                <div className="col-lg-9 col-xl-6">
                  <span className="kt-switch">
                    <label>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="email_notification_1"
                      />
                      <span></span>
                    </label>
                  </span>
                </div>
              </div>
              <div className="form-group form-group-last row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Send Copy To Personal Email
                </label>
                <div className="col-lg-9 col-xl-6">
                  <span className="kt-switch">
                    <label>
                      <input type="checkbox" name="email_notification_2" />
                      <span></span>
                    </label>
                  </span>
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
                    Activity Related Emails:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  When To Email
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-checkbox-list">
                    <label className="kt-checkbox">
                      <input type="checkbox" /> You have new notifications.
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" /> You're sent a direct message
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="checked" /> Someone adds
                      you as a connection
                      <span></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group form-group-last row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  When To Escalate Emails
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-checkbox-list">
                    <label className="kt-checkbox kt-checkbox--brand">
                      <input type="checkbox" /> Upon new order.
                      <span></span>
                    </label>
                    <label className="kt-checkbox kt-checkbox--brand">
                      <input type="checkbox" /> New membership approval
                      <span></span>
                    </label>
                    <label className="kt-checkbox kt-checkbox--brand">
                      <input type="checkbox" checked="checked" /> Member
                      registration
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
                    Updates From Keenthemes:
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  Email You With
                </label>
                <div className="col-lg-9 col-xl-6">
                  <div className="kt-checkbox-list">
                    <label className="kt-checkbox">
                      <input type="checkbox" /> News about Metronic product and
                      feature updates
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" /> Tips on getting more out of Keen
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="checked" /> Things you
                      missed since you last logged into Keen
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="checked" /> News about
                      Metronic on partner products and other services
                      <span></span>
                    </label>
                    <label className="kt-checkbox">
                      <input type="checkbox" checked="checked" /> Tips on
                      Metronic business products
                      <span></span>
                    </label>
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
              <a href="/#" className="btn btn-label-brand btn-bold">
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

export default Playlists;
