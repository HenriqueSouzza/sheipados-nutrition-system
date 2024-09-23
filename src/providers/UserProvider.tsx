import { ReactNode, useCallback, useEffect, useMemo, useReducer } from "react";
import { UpdateUserProps, UserContext, UserContextProps } from "@/contexts";
import { UserActions, InitialStateUser, UserReducer } from "@/reducer";
import { useAuth } from "@/hooks";

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ ...props }: UserProviderProps) => {
  const [state, dispatch] = useReducer(UserReducer, InitialStateUser);
  const { profile: { accessToken }, loading, onProfile } = useAuth();

  const onUpdate = useCallback(({ username, data }: UpdateUserProps) => {
    UserActions.update(dispatch, username, data, accessToken ?? '');
  }, [accessToken])

  useEffect(() => {
    onProfile()
  }, [state.user, onProfile]);

  const UserContextValue: UserContextProps = useMemo(() => ({
    ...state,
    loading: state.loading || loading,
    onUpdate,
  }), [state, onUpdate, loading]);

  return <UserContext.Provider value={UserContextValue} {...props} />
}