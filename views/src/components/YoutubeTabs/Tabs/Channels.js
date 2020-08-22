import React from 'react';

const Channels = () => {
  return (
    <div className="tab-pane " id="kt_contacts_view_tab_4" role="tabpanel">
      <div className="kt-container">
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              placeholder="Type notes"
            ></textarea>
          </div>
          <div className="row">
            <div className="col">
              <a href="#" className="btn btn-label-brand btn-bold">
                Add notes
              </a>
              <a href="#" className="btn btn-clean btn-bold">
                Cancel
              </a>
            </div>
          </div>
        </form>
        <div className="kt-separator kt-separator--space-lg kt-separator--border-dashed"></div>
        <div
          className="kt-notes kt-scroll kt-scroll--pull"
          data-scroll="true"
          style={{ height: '500px' }}
        >
          <div className="kt-notes__items">
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <img
                  className="kt-hidden-"
                  src="assets/media/users/100_3.jpg"
                  alt="image"
                />
                <span className="kt-notes__icon kt-font-boldest kt-hidden">
                  <i className="flaticon2-cup"></i>
                </span>
                <h3 className="kt-notes__user kt-font-boldest kt-hidden">
                  N S
                </h3>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      New order
                    </a>
                    <span className="kt-notes__desc">9:30AM 16 June, 2015</span>
                    <span className="kt-badge kt-badge--success kt-badge--inline">
                      new
                    </span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon-more-1 kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <span className="kt-notes__icon">
                  <i className="flaticon2-rocket kt-font-danger"></i>
                </span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      Notification
                    </a>
                    <span className="kt-notes__desc">10:30AM 23 May, 2013</span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon2-rectangular kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <h3 className="kt-notes__user kt-font-brand kt-font-boldest">
                  DS
                </h3>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      System alert
                    </a>
                    <span className="kt-notes__desc">
                      7:10AM 21 February, 2016
                    </span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon2-note kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <span className="kt-notes__icon">
                  <i className="flaticon2-poll-symbol kt-font-success"></i>
                </span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      New order
                    </a>
                    <span className="kt-notes__desc">10:30AM 23 May, 2013</span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon2-gear kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <span className="kt-notes__icon">
                  <i className="flaticon2-box-1 kt-font-brand"></i>
                </span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      Notification
                    </a>
                    <span className="kt-notes__desc">10:30AM 23 May, 2013</span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon2-sort kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item">
              <div className="kt-notes__media">
                <span className="kt-notes__icon">
                  <i className="flaticon2-rocket kt-font-danger"></i>
                </span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      Notification
                    </a>
                    <span className="kt-notes__desc">10:30AM 23 May, 2013</span>
                  </div>
                  <div className="kt-notes__dropdown">
                    <a
                      href="#"
                      className="btn btn-sm btn-icon-md btn-icon"
                      data-toggle="dropdown"
                    >
                      <i className="flaticon2-rectangular kt-font-brand"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <ul className="kt-nav">
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-line-chart"></i>
                            <span className="kt-nav__link-text">Reports</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-send"></i>
                            <span className="kt-nav__link-text">Messages</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                            <span className="kt-nav__link-text">Charts</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-avatar"></i>
                            <span className="kt-nav__link-text">Members</span>
                          </a>
                        </li>
                        <li className="kt-nav__item">
                          <a href="#" className="kt-nav__link">
                            <i className="kt-nav__link-icon flaticon2-settings"></i>
                            <span className="kt-nav__link-text">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item kt-notes__item--clean">
              <div className="kt-notes__media">
                <img
                  className="kt-hidden"
                  src="assets/media/users/100_1.jpg"
                  alt="image"
                />
                <span className="kt-notes__icon kt-font-boldest kt-hidden">
                  <i className="flaticon2-cup"></i>
                </span>
                <h3 className="kt-notes__user kt-font-boldest kt-hidden">
                  M E
                </h3>
                <span className="kt-notes__circle kt-hidden-"></span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      Order
                    </a>
                    <span className="kt-notes__desc">
                      11:40AM 14 March, 2012
                    </span>
                    <span className="kt-badge kt-badge--danger kt-badge--inline">
                      important
                    </span>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto.
                </span>
              </div>
            </div>
            <div className="kt-notes__item kt-notes__item--clean">
              <div className="kt-notes__media">
                <img
                  className="kt-hidden"
                  src="assets/media/users/100_1.jpg"
                  alt="image"
                />
                <span className="kt-notes__icon kt-font-boldest kt-hidden">
                  <i className="flaticon2-cup"></i>
                </span>
                <h3 className="kt-notes__user kt-font-boldest kt-hidden">
                  N B
                </h3>
                <span className="kt-notes__circle kt-hidden-"></span>
              </div>
              <div className="kt-notes__content">
                <div className="kt-notes__section">
                  <div className="kt-notes__info">
                    <a href="#" className="kt-notes__title">
                      Remarks
                    </a>
                    <span className="kt-notes__desc">
                      10:30AM 23 April, 2013
                    </span>
                  </div>
                </div>
                <span className="kt-notes__body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
