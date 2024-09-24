import { ReactNode, useCallback, useMemo, useReducer } from "react";
import { CreateUserProps, UpdateUserProps, UserContext, UserContextProps } from "@/contexts";
import { UserActions, InitialStateUser, UserReducer } from "@/reducer";

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ ...props }: UserProviderProps) => {
  const [state, dispatch] = useReducer(UserReducer, InitialStateUser);

  const onUpdate = useCallback(({ username = '', data }: UpdateUserProps) => {
    UserActions.update(dispatch, username, data);
  }, []);

  const onGet = useCallback((username?: string) => {
    UserActions.get(dispatch, username);
  }, []);

  const onCreate = useCallback(({ email = '', name = '' }: CreateUserProps) => {
    UserActions.create(dispatch, { email, name });
  }, []);

  const UserContextValue: UserContextProps = useMemo(() => ({
    ...state,
    onCreate,
    onUpdate,
    onGet,
  }), [state, onUpdate, onGet, onCreate]);

  return <UserContext.Provider value={UserContextValue} {...props} />
}