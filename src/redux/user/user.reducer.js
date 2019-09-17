import UserActionsTypes from "./user.types";
import { selectCurrentUser } from "./user.selector";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionsTypes.SIGN_IN_FAILURE:
    case UserActionsTypes.SIGN_OUT_FAILURE:
    case UserActionsTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UserActionsTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
