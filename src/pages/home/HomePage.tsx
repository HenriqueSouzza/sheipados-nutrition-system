import { useAuth } from '@/hooks';
import { useParams } from 'react-router-dom';

export const HomePage = () => {
  const { id } = useParams();
  const { logout } = useAuth();

  return <button onClick={logout}>Sair do sistema com id:{id}</button>;
};
