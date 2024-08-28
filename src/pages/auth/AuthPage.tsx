import { useAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
    login();
  }

  return <button onClick={handleSubmit}>Realizar login</button>
};
