import { ActionProps } from "@/interface";
import { USER_FAILURE, USER_GET_SUCCESS, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";

export const InitialStateUser = {
  user: {},
  userList: [],
  loading: false,
  error: false,
};

export const UserReducer = (state = InitialStateUser, action: ActionProps) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload
      };
    case USER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userList: action.payload
      };
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};