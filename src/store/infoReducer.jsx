import { INSERT_SONG_LIST } from "./actions";
const initialState = {
  infoList: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case INSERT_SONG_LIST:
      return {
        infoList: [...state.infoList, action.payload],
      };
    default:
      return state;
  }
}
