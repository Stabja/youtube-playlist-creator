import axios from 'axios';
import {
  AUTHENTICATION_URL,
  USER_CHANNEL_URL,
  LIKED_VIDEOS_URL,
  DISLIKED_VIDEOS_URL,
  MOSTPOPULAR_MUSIC_URL,
  MOSTPOPULAR_SPORTS_URL,
  MOSTPOPULAR_GAMING_URL,
  MOSTPOPULAR_ENTERTAINMENT_URL
} from './endpoints';


export const authenticateUser = () => {
  axios.get(AUTHENTICATION_URL)
    .then(res => {
      console.log(`${res.data.access_token}`.bgGreen);
      if(typeof res.data.access_token !== 'undefined'){
        window.localStorage.setItem('token', res.data.access_token);
        console.log('Token saved in Browser Storage');
      }
    })
    .catch(err => {
      console.log({ err });
    });
};


export const fetchUserChannelDetails = () => {
  axios.get(USER_CHANNEL_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      mine: true,
    }
  }).then((res) => {
    return res.data.items[0];
  })
  .catch((err) => {
    console.log(err);
  });
};


export const fetchLikedVideos = () => {
  axios.get(LIKED_VIDEOS_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    console.log(res.data.videos);
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};


export const fetchDislikedVideos = () => {
  axios.get(DISLIKED_VIDEOS_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};


export const fetchMostPopularMusicVideos = () => {
  axios.get(MOSTPOPULAR_MUSIC_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};


export const fetchMostPopularSportsVideos = () => {
  axios.get(MOSTPOPULAR_SPORTS_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};


export const fetchMostPopularGamingVideos = () => {
  axios.get(MOSTPOPULAR_GAMING_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};


export const fetchMostPopularEntertainmentVideos = () => {
  axios.get(MOSTPOPULAR_ENTERTAINMENT_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`
    },
    params: {
      key: 'AIzaSyCNw_f46Q9QlADv66oEH2Q5jK9wn7pFWO4',
      pageSize: 20
    }
  }).then(res => {
    console.log('%c Videos Fetched', 'color: green');
    return res.data.videos;
  }).catch(err => {
    console.log(err);
  });
};
