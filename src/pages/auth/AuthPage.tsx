import { useAuth } from "@/hooks";

const AuthPage = () => {
  const { login } = useAuth();
  return <button onClick={login}>Realizar login</button>
};

export default AuthPage;