import { ActionProps } from "@/interface";
import { LOGIN_FAILURE, LOGIN_PROFILE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./AuthTypes";
import Cookies from "js-cookie";

export const InitialStateAuth = {
  profile: {
    accessToken: Cookies.get('accessToken'),
    authenticated: Cookies.get('authenticated') === 'true',
  },
  loading: false,
  error: false,
};

export const AuthReducer = (state = InitialStateAuth, action: ActionProps) => {
  switch (action.type) {
    case LOGIN_PROFILE:
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          authenticated: true,
          ...action.payload
        },
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: {
          ...state.profile,
          authenticated: true,
          accessToken: action.payload
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        profile: {},
        loading: false,
        error: false
      };
    default:
      return state;
  }
};