import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Icons
import DropdownMenu from './DropdownMenu';
import ProfileOverviewIcon from './Icons/POicon';
import PersonalInfoIcon from './Icons/PIicon';
import AccountInfoIcon from './Icons/AIicon';
import ChangePasswordIcon from './Icons/CPicon';
import EmailSettingsIcon from './Icons/ESicon';
import SavedCreditIcon from './Icons/SCicon';
import TaxInfoIcon from './Icons/TIicon';
import StatementsIcon from './Icons/StmtIcon';



const ChannelInfo = () => {
  const [channelState, setChannelState] = useState(null);

  useEffect(() => {
    const getUserChannel = () => {
      const options = {
        method: 'GET',
        baseURL: 'http://localhost:3080/channels/me',
        headers: {
          Authorization: 'Bearer ya29.a0AfH6SMDVLrpVaXzNtjs9CV_R-jdp02LqdztUS46sHTwQii5KCpEZdCmqSx4xnY2_tPvmQbYIPFgkT80dOFHUk97-Q9gI6D85RFxwGKkqF_-oZX4b_6z5c1ukOQsZtZaNfBlzqRaVxL4pOy5XipFlJE7PSBYyr1D_xci0',
        },
        params: {
          key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
          part:
            'brandingSettings,contentDetails,contentOwnerDetails,id,localizations,snippet,statistics,status,topicDetails',
          mine: true,
        },
      };
      axios(options)
        .then((res) => {
          setChannelState(res.data.items[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUserChannel();
  }, []);


  return (
    <div id="kt_user_profile_aside">
      <div className="kt-portlet__head  kt-portlet__head--noborder">
        <div className="kt-portlet__head-label"></div>
        <div className="kt-portlet__head-toolbar">
          <a
            href="/#"
            className="btn btn-clean btn-sm btn-icon btn-icon-md"
            data-toggle="dropdown"
          >
            <i className="flaticon-more-1"></i>
          </a>
          <DropdownMenu />
        </div>
      </div>
      <div className="kt-portlet__body kt-portlet__body--fit-y">
        <div className="kt-widget kt-widget--user-profile-1">

          <div className="kt-widget__head">
            <div className="kt-widget__media">
              <img
                src={channelState && channelState.snippet.thumbnails.medium.url}
                alt="image"
              />
            </div>
            <div className="kt-widget__content">
              <div className="kt-widget__section">
                <h3 className="kt-widget__username">
                  {channelState && channelState.snippet.title}
                  <i className="flaticon2-correct kt-font-success"></i>
                </h3>
                <span className="kt-widget__subtitle">
                {channelState && channelState.statistics.subscriberCount} Subscribers
                </span>
              </div>
              <div className="kt-widget__action">
                <button type="button" className="btn btn-info btn-sm">
                  chat
                </button>
                &nbsp;
                <button type="button" className="btn btn-success btn-sm">
                  follow
                </button>
              </div>
            </div>
          </div>
          
          <div className="kt-widget__body">
            <div className="kt-widget__content">
              <div className="kt-widget__info">
                <span className="kt-widget__label">PublishedAt:</span>
                <span className="kt-widget__data">
                  {channelState && channelState.snippet.publishedAt}
                </span>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Likes:</span>
                <a href="/#" className="kt-widget__data">
                  {channelState && channelState.contentDetails.relatedPlaylists.likes}
                </a>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Favourites:</span>
                <a href="/#" className="kt-widget__data">
                  {channelState && channelState.contentDetails.relatedPlaylists.favorites}
                </a>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Uploads:</span>
                <a href="/#" className="kt-widget__data">
                  {channelState && channelState.contentDetails.relatedPlaylists.uploads}
                </a>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Views:</span>
                <span className="kt-widget__data">
                  {channelState && channelState.statistics.viewCount}
                </span>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Subscribers:</span>
                <span className="kt-widget__data">
                  {channelState && channelState.statistics.subscriberCount}
                </span>
              </div>
              <div className="kt-widget__info">
                <span className="kt-widget__label">Videos:</span>
                <span className="kt-widget__data">
                  {channelState && channelState.statistics.videoCount}
                </span>
              </div>
            </div>
            <div className="kt-widget__items">
              <a href="/#" className="kt-widget__item ">
                <span className="kt-widget__section">
                  <ProfileOverviewIcon />
                  <span className="kt-widget__desc">Profile Overview</span>
                </span>
              </a>
              <a href="/#" className="kt-widget__item kt-widget__item--active">
                <span className="kt-widget__section">
                  <PersonalInfoIcon />
                  <span className="kt-widget__desc">Personal Information</span>
                </span>
              </a>
              <a href="/#" className="kt-widget__item ">
                <span className="kt-widget__section">
                  <AccountInfoIcon />
                  <span className="kt-widget__desc">Account Information</span>
                </span>
              </a>
              <a href="/#" className="kt-widget__item ">
                <span className="kt-widget__section">
                  <ChangePasswordIcon />
                  <span className="kt-widget__desc">Change Password</span>
                </span>
                <span className="kt-badge kt-badge--unified-danger kt-badge--sm kt-badge--rounded kt-badge--bolder">5</span>
              </a>
              <a href="/#" className="kt-widget__item ">
                <span className="kt-widget__section">
                  <EmailSettingsIcon />
                  <span className="kt-widget__desc">Email Settings</span>
                </span>
              </a>
              <a
                  href="/#"
                  className="kt-widget__item"
                  data-toggle="kt-tooltip"
                  title="Coming soon..."
                  data-placement="right"
                >
                  <span className="kt-widget__section">
                    <SavedCreditIcon />
                    <span className="kt-widget__desc">Saved Credit Cards</span>
                  </span>
                </a>
              <a
                  href="/#"
                  className="kt-widget__item"
                  data-toggle="kt-tooltip"
                  title="Coming soon..."
                  data-placement="right"
                >
                  <span className="kt-widget__section">
                    <TaxInfoIcon />
                    <span href="/#" className="kt-widget__desc">Tax Information</span>
                  </span>
                  <span className="kt-badge kt-badge--unified-brand kt-badge--inline kt-badge--bolder">new</span>
                </a>
              <a
                  href="/#"
                  className="kt-widget__item"
                  data-toggle="kt-tooltip"
                  title="Coming soon..."
                  data-placement="right"
                >
                  <span className="kt-widget__section">
                    <StatementsIcon />
                    <span className="kt-widget__desc">Statements</span>
                  </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
