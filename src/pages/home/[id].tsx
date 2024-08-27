import { useAuth } from '@/hooks';
import { useParams } from 'react-router-dom';

export const Home = () => {
	const { id } = useParams();
	const { logout } = useAuth();

	return <button onClick={logout}>Sair do sistema com id:{id}</button>;
};

export default Home;