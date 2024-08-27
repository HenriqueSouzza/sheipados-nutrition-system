import { useAuth } from '@/hooks';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Middleware() {
  const { logged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate('/auth')
    } else {
      navigate('/home/1')
    }
  }, [navigate, logged])
}