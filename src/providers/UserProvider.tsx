import { ReactNode, useMemo, useReducer } from "react";
import { UserContext, UserContextProps } from "@/contexts";
import { InitialStateUser, UserReducer, useUserActions } from "@/store";
import { useAuth } from "@/hooks";

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ ...props }: UserProviderProps) => {
  const [state, dispatch] = useReducer(UserReducer, InitialStateUser);
  const { profile: { accessToken } } = useAuth()
  const { onUpdate, onCreate, onDelete, onGet } = useUserActions(dispatch, accessToken);

  const UserContextValue: UserContextProps = useMemo(() => ({
    ...state,
    onCreate,
    onUpdate,
    onDelete,
    onGet,
  }), [state, onUpdate, onGet, onDelete, onCreate]);

  return <UserContext.Provider value={UserContextValue} {...props} />
}