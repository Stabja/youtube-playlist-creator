const BASE_URL = 'http://localhost:3080';


// Authentication Endpoint
export const AUTHENTICATION_URL = `${BASE_URL}/channels/authorize`;
export const SERVER_REDIRECT_URL = `${BASE_URL}/channels/receiveCode`;

// Channel Endpoints
export const CHANNEL_BY_ID_URL = `${BASE_URL}/channels`;
export const USER_CHANNEL_URL = `${BASE_URL}/channels/me`;
export const DUDEPERFECT_CHANNEL_URL = `${BASE_URL}/channels/dudeperfect`;
export const SEARCH_VIDEO_URL = `${BASE_URL}/channels/search`;

// Playlist Endpoints
export const PLAYLIST_BY_ID_URL = `${BASE_URL}/playlists`;
export const PLAYLIST_BY_CHANNEL_ID_URL = `${BASE_URL}/playlists/bychannel`;
export const USER_PLAYLISTS_URL = `${BASE_URL}/playlists/me`;
export const CREATE_PLAYLIST_URL = `${BASE_URL}/playlists/create`;
export const CREATE_PLAYLIST_FROM_TRACKS_URL = `${BASE_URL}/playlists/from-tracks`;

// Video Endpoints
export const VIDEO_BY_ID_URL = `${BASE_URL}/videos`;
export const LIKED_VIDEOS_URL = `${BASE_URL}/videos/me/liked`;
export const DISLIKED_VIDEOS_URL = `${BASE_URL}/videos/me/disliked`;
export const MOSTPOPULAR_MUSIC_URL = `${BASE_URL}/videos/mostpopular/music`;
export const MOSTPOPULAR_SPORTS_URL = `${BASE_URL}/videos/mostpopular/sports`;
export const MOSTPOPULAR_GAMING_URL = `${BASE_URL}/videos/mostpopular/gaming`;
export const MOSTPOPULAR_ENTERTAINMENT_URL = `${BASE_URL}/videos/mostpopular/entertainment`;