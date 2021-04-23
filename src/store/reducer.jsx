import { FaceRounded } from "@material-ui/icons";
import {
  FETCH_SONG_LIST,
  INSERT_SONG_LIST,
  FAV_SONG_LIST,
  FAV_DEL_LIST,
  CUR_PROFILE,
  SIGNUP,
  LOGGEDIN,
  USER_FAV_SONG_LIST,
  USER_FAV_DEL_LIST,
} from "./actions";
const initialState = {
  songList: [],
  infoList: [],
  favList: [],
  profile: [],
  signUpList: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SONG_LIST:
      return { ...state, songList: action.payload };
    case INSERT_SONG_LIST:
      return {
        ...state,
        infoList: [...state.infoList, action.payload],
      };
    case FAV_SONG_LIST:
      return {
        ...state,
        profile: {
          ...state.profile,
          fav: [...state.profile.fav, action.payload],
        },
        infoList: state.infoList.map((user) =>
          user.name == state.profile.name
            ? { ...user, fav: [...user.fav, action.payload] }
            : user
        ),
      };

    case USER_FAV_SONG_LIST:
      return {
        ...state,
        infoList: {
          ...state.infoList,
          fav: [...state.profile.fav, action.payload],
        },
      };

    case FAV_DEL_LIST:
      return {
        ...state,
        profile: {
          ...state.profile,
          fav: [...state.profile.fav.filter((todo) => todo !== action.payload)],
        },
      };

    case USER_FAV_DEL_LIST:
      return {
        ...state,
        profile: {
          ...state.profile,
          fav: [...state.profile.fav.filter((todo) => todo !== action.payload)],
        },
      };
    case CUR_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case SIGNUP:
      return {
        ...state,
        signUpList: action.payload,
      };
    case LOGGEDIN:
      return {
        ...state,
        signUpList: { ...state.signUpList, isLogged: action.payload },
      };
    default:
      return state;
  }
}
