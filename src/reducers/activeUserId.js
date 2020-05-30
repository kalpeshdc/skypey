import { SET_ACTIVE_USER_ID } from "../constants/actionTypes";

export default (state = null, action) => {
  if (action.type === SET_ACTIVE_USER_ID) {
    return action.payload;
  }
  return state;
};
