import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,

  SESSION_FALSE,
  SESSION_EXPIRED,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, sessionExpired: false }
  : { isLoggedIn: false, user: null, sessionExpired: false };

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        // user: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case SESSION_EXPIRED: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        sessionExpired: true,
      };
    }
    case SESSION_FALSE: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        sessionExpired: false,
      };
    }
    default:
      return state;
  }
}


