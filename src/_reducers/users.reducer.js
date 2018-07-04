import { userConstants } from "../_constants";

const initialState = {
  feed: []
};

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.GETALL_FEED:
      return {
        feed: action.feed
      };
    default:
      return state;
  }
}
