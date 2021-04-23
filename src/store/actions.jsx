import axios from "axios";
export const FETCH_SONG_LIST = "FETCH_SONG_LIST";
export const INSERT_SONG_LIST = "INSERT_SONG_LIST";
export const FAV_SONG_LIST = "FAV_SONG_LIST";
export const FAV_DEL_LIST = "FAV_DEL_LIST";
export const CUR_PROFILE = "CUR_PROFILE";
export const SIGNUP = "SIGNUP";
export const LOGGEDIN = "LOGGEDIN";
export const USER_FAV_SONG_LIST = "USER_FAV_SONG_LIST";
export const USER_FAV_DEL_LIST = "USER_FAV_DEL_LIST";

export const songList = () => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?api_key=cd644a034540e6d39a0fd9fc1db75b2f&format=json&method=album.search&album=weekend`
    );
    if (
      res.data &&
      res.data.results.albummatches &&
      res.data.results.albummatches.album
    ) {
      var songsArray = res.data.results.albummatches.album;
      dispatch({ type: FETCH_SONG_LIST, payload: songsArray });
      // var songInfoData = songsArray.map(
      // async (song, i) => await songInfo(song.mbid)
      // );
    }
  };
};

export const artistList = (data) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?api_key=cd644a034540e6d39a0fd9fc1db75b2f&format=json&method=artist.search&artist=${data}`
    );
    console.log(res);
    if (
      res.data &&
      res.data.results &&
      res.data.results.artistmatches &&
      res.data.results.artistmatches.artist
    ) {
      var songsArray = res.data.results.artistmatches.artist;
      dispatch({ type: FETCH_SONG_LIST, payload: songsArray });
    }
  };
};

export const albumList = (data) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?api_key=cd644a034540e6d39a0fd9fc1db75b2f&format=json&method=${"album.search"}&album=${data}`
    );
    console.log(res);
    if (
      res.data &&
      res.data.results &&
      res.data.results.albummatches &&
      res.data.results.albummatches.album
    ) {
      var songsArray = res.data.results.albummatches.album;
      dispatch({ type: FETCH_SONG_LIST, payload: songsArray });
    }
  };
};

export const trackList = (data) => {
  console.log(data);
  return async (dispatch) => {
    const res = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?api_key=cd644a034540e6d39a0fd9fc1db75b2f&format=json&method=track.search&track=${data}`
    );
    console.log(res);
    if (
      res.data &&
      res.data.results &&
      res.data.results.trackmatches &&
      res.data.results.trackmatches.track
    ) {
      var songsArray = res.data.results.trackmatches.track;
      dispatch({ type: FETCH_SONG_LIST, payload: songsArray });
    }
  };
};

export const userData = (data) => {
  return async (dispatch) => {
    dispatch({ type: INSERT_SONG_LIST, payload: data });
  };
};

export const favData = (data) => {
  return async (dispatch) => {
    dispatch({ type: FAV_SONG_LIST, payload: data });
  };
};
export const favDelete = (data) => {
  return async (dispatch) => {
    dispatch({ type: FAV_DEL_LIST, payload: data });
  };
};
export const userfavData = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_FAV_SONG_LIST, payload: data });
  };
};
export const userfavDelete = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_FAV_DEL_LIST, payload: data });
  };
};
export const curProfile = (data) => {
  return async (dispatch) => {
    dispatch({ type: CUR_PROFILE, payload: data });
  };
};
export const signUp = (data) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP, payload: data });
  };
};

export const loggedIn = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOGGEDIN, payload: data });
  };
};

// export const songInfo = async (data) => {
//   const res = await axios.get(
//     `http://ws.audioscrobbler.com/2.0/?&api_key=cd644a034540e6d39a0fd9fc1db75b2f&method=track.getInfo&mbid=${data}&format=json`
//   );
//   console.log(res);
//   if (res.data && res.data.track) {
//     console.log(res.data.track);

//     // dispatch({ type: INSERT_SONG_LIST, payload: res.data.track });
//   }
// };
