export const initialState = {
  user: null,
  playlists: [],
  song: null,
  song_playing: false,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // Set token to NULL when deploying.
  // token:
  //   "BQC8nLEqwe8tLrWx3Cyfl_vyR_SIA5o5_swfZz2fyf5V_JvEHsWvfwpMRxmfoi9Sjs_iPgUiCyMTAml78_lVWJILVk628I9k9p0rwAvhoLSpQCFV0V7z2yyRo8JS6NN0XI5IXvYrvZ70fPKjGB9uKOfpN5jxpKMAVWyvzwQCvTi0OEzN&token_type",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_WEEKLY_PLAYLIST":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};

export default reducer;
