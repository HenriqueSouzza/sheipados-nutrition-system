import { ReactNode, useCallback, useMemo, useReducer } from "react";
import { GetUserProps, UpdateUserProps, UserContext, UserContextProps } from "@/contexts";
import { UserActions, InitialStateUser, UserReducer } from "@/reducer";
import { useAuth } from "@/hooks";

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ ...props }: UserProviderProps) => {
  const [state, dispatch] = useReducer(UserReducer, InitialStateUser);
  const { profile: { accessToken } } = useAuth();

  const onUpdate = useCallback(({ username = '', data }: UpdateUserProps) => {
    UserActions.update(dispatch, username, data, accessToken ?? '');
  }, [accessToken]);

  const onGet = useCallback(({ username = '' }: GetUserProps) => {
    UserActions.get(dispatch, username, accessToken ?? '');
  }, [accessToken]);

  const UserContextValue: UserContextProps = useMemo(() => ({
    ...state,
    onUpdate,
    onGet,
  }), [state, onUpdate, onGet]);

  return <UserContext.Provider value={UserContextValue} {...props} />
}