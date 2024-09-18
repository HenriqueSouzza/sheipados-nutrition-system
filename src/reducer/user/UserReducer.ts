import { AuthActionProps } from "./UserActions";
import { USER_FAILURE, USER_REQUEST, USER_UPDATE_SUCCESS } from "./UserTypes";

export const InitialStateUser = {
  user: {},
  loading: true,
  error: false,
};

export const UserReducer = (state = InitialStateUser, action: AuthActionProps) => {
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