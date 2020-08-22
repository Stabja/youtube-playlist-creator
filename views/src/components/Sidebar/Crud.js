import React from 'react';

const Crud = () => {
  return (
    <div id="sidebar-crud-section">
      <li className="kt-menu__section ">
        <h4 className="kt-menu__section-text">CRUD</h4>
        <i className="kt-menu__section-icon flaticon-more-v2"></i>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                  fill="#000000"
                  opacity="0.3"
                />
                <path
                  d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">Forms</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li
              className="kt-menu__item  kt-menu__item--parent"
              aria-haspopup="true"
            >
              <span className="kt-menu__link">
                <span className="kt-menu__link-text">Forms</span>
              </span>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Form Controls</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/base.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Base Inputs</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/input-group.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Input Groups</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/checkbox.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Checkbox</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/radio.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Radio</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/switch.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Switch</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/controls/option.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Mega Options</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Form Widgets</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-datepicker.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Datepicker</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-datetimepicker.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Datetimepicker</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-timepicker.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Timepicker</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-daterangepicker.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Daterangepicker
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/tagify.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Tagify</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-touchspin.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Touchspin</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-maxlength.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Maxlength</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-switch.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Switch</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-multipleselectsplitter.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Multiple Select Splitter
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/bootstrap-select.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Bootstrap Select
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/select2.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Select2</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/typeahead.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Typeahead</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/nouislider.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">noUiSlider</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/form-repeater.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Form Repeater</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/ion-range-slider.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Ion Range Slider
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/input-mask.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Input Masks</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/autosize.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Autosize</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/clipboard.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Clipboard</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/widgets/recaptcha.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Google reCaptcha
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Form Text Editors</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/editors/tinymce.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">TinyMCE</span>
                    </a>
                  </li>
                  <li
                    className="kt-menu__item  kt-menu__item--submenu"
                    aria-haspopup="true"
                    data-ktmenu-submenu-toggle="hover"
                  >
                    <a
                      href="javascript:;"
                      className="kt-menu__link kt-menu__toggle"
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">CKEditor</span>
                      <i className="kt-menu__ver-arrow la la-angle-right"></i>
                    </a>
                    <div className="kt-menu__submenu ">
                      <span className="kt-menu__arrow"></span>
                      <ul className="kt-menu__subnav">
                        <li className="kt-menu__item " aria-haspopup="true">
                          <a
                            href="crud/forms/editors/ckeditor-classNameic.html"
                            className="kt-menu__link "
                          >
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                              <span></span>
                            </i>
                            <span className="kt-menu__link-text">
                              CKEditor classNameic
                            </span>
                          </a>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true">
                          <a
                            href="crud/forms/editors/ckeditor-inline.html"
                            className="kt-menu__link "
                          >
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                              <span></span>
                            </i>
                            <span className="kt-menu__link-text">
                              CKEditor Inline
                            </span>
                          </a>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true">
                          <a
                            href="crud/forms/editors/ckeditor-balloon.html"
                            className="kt-menu__link "
                          >
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                              <span></span>
                            </i>
                            <span className="kt-menu__link-text">
                              CKEditor Balloon
                            </span>
                          </a>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true">
                          <a
                            href="crud/forms/editors/ckeditor-balloon-block.html"
                            className="kt-menu__link "
                          >
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                              <span></span>
                            </i>
                            <span className="kt-menu__link-text">
                              CKEditor Balloon Block
                            </span>
                          </a>
                        </li>
                        <li className="kt-menu__item " aria-haspopup="true">
                          <a
                            href="crud/forms/editors/ckeditor-document.html"
                            className="kt-menu__link "
                          >
                            <i className="kt-menu__link-bullet kt-menu__link-bullet--line">
                              <span></span>
                            </i>
                            <span className="kt-menu__link-text">
                              CKEditor Document
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/editors/quill.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Quill Text Editor
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/editors/summernote.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Summernote WYSIWYG
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/editors/bootstrap-markdown.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Markdown Editor
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Form Layouts</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/layouts/default-forms.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Default Forms</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/layouts/multi-column-forms.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Multi Column Forms
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/layouts/action-bars.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Basic Action Bars
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/layouts/sticky-action-bar.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Sticky Action Bar
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Form Validation</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/validation/states.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Validation States
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/validation/form-controls.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Form Controls</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/forms/validation/form-widgets.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Form Widgets</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M10,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,7 C22,7.55228475 21.5522847,8 21,8 L10,8 C9.44771525,8 9,7.55228475 9,7 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M10,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,13 C22,13.5522847 21.5522847,14 21,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L21,16 C21.5522847,16 22,16.4477153 22,17 L22,19 C22,19.5522847 21.5522847,20 21,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                  fill="#000000"
                />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  x="2"
                  y="4"
                  width="5"
                  height="16"
                  rx="1"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">KTDatatable</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li
              className="kt-menu__item  kt-menu__item--parent"
              aria-haspopup="true"
            >
              <span className="kt-menu__link">
                <span className="kt-menu__link-text">KTDatatable</span>
              </span>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Base</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/data-local.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Local Data</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/data-json.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">JSON Data</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/data-ajax.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Ajax Data</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/html-table.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">HTML Table</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/local-sort.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Local Sort</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/base/translation.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Translation</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Advanced</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/record-selection.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Record Selection
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/row-details.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Row Details</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/modal.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Modal Examples</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/column-rendering.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Column Rendering
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/column-width.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Column Width</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/vertical.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Vertical Scrolling
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/advanced/horizontal.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Horizontal Scrolling
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Child Datatables</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/child/data-local.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Local Data</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/child/data-ajax.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Remote Data</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">API</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/api/methods.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">API Methods</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/metronic-datatable/api/events.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Events</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  x="4"
                  y="5"
                  width="16"
                  height="6"
                  rx="1.5"
                />
                <rect
                  fill="#000000"
                  x="4"
                  y="13"
                  width="16"
                  height="6"
                  rx="1.5"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">Datatables.net</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li
              className="kt-menu__item  kt-menu__item--parent"
              aria-haspopup="true"
            >
              <span className="kt-menu__link">
                <span className="kt-menu__link-text">Datatables.net</span>
              </span>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Basic</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/basic/basic.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Basic Tables</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/basic/scrollable.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Scrollable Tables
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/basic/headers.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Complex Headers
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/basic/paginations.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Pagination Options
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Advanced</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/column-rendering.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Column Rendering
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/multiple-controls.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Multiple Controls
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/column-visibility.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Column Visibility
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/row-callback.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Row Callback</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/row-grouping.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Row Grouping</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/advanced/footer-callback.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Footer Callback
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Data sources</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/data-sources/html.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">HTML</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/data-sources/javascript.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Javascript</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/data-sources/ajax-client-side.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Ajax Client-side
                      </span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/data-sources/ajax-server-side.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Ajax Server-side
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Search Options</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/search-options/column-search.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Column Search</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/search-options/advanced-search.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">
                        Advanced Search
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="kt-menu__item  kt-menu__item--submenu"
              aria-haspopup="true"
              data-ktmenu-submenu-toggle="hover"
            >
              <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Extensions</span>
                <i className="kt-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div className="kt-menu__submenu ">
                <span className="kt-menu__arrow"></span>
                <ul className="kt-menu__subnav">
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/buttons.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Buttons</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/colreorder.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">ColReorder</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/keytable.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">KeyTable</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/responsive.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Responsive</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/rowgroup.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">RowGroup</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/rowreorder.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">RowReorder</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/scroller.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Scroller</span>
                    </a>
                  </li>
                  <li className="kt-menu__item " aria-haspopup="true">
                    <a
                      href="crud/datatables/extensions/select.html"
                      className="kt-menu__link "
                    >
                      <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                        <span></span>
                      </i>
                      <span className="kt-menu__link-text">Select</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li
        className="kt-menu__item  kt-menu__item--submenu"
        aria-haspopup="true"
        data-ktmenu-submenu-toggle="hover"
      >
        <a href="javascript:;" className="kt-menu__link kt-menu__toggle">
          <span className="kt-menu__link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              className="kt-svg-icon"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  opacity="0.3"
                />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  x="11"
                  y="2"
                  width="2"
                  height="14"
                  rx="1"
                />
                <path
                  d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z"
                  fill="#000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </span>
          <span className="kt-menu__link-text">File Upload</span>
          <i className="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div className="kt-menu__submenu ">
          <span className="kt-menu__arrow"></span>
          <ul className="kt-menu__subnav">
            <li className="kt-menu__item " aria-haspopup="true">
              <a
                href="crud/file-upload/metronic-avatar.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Metronic Avatar</span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a
                href="crud/file-upload/dropzonejs.html"
                className="kt-menu__link "
              >
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">DropzoneJS</span>
                <span className="kt-menu__link-badge">
                  <span className="kt-badge kt-badge--danger kt-badge--inline">
                    new
                  </span>
                </span>
              </a>
            </li>
            <li className="kt-menu__item " aria-haspopup="true">
              <a href="crud/file-upload/uppy.html" className="kt-menu__link ">
                <i className="kt-menu__link-bullet kt-menu__link-bullet--dot">
                  <span></span>
                </i>
                <span className="kt-menu__link-text">Uppy</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default Crud;
