import { useParams } from 'react-router-dom';

const Home = () => {
  const { id } = useParams();

  return <>Page home {id}</>;
};

export default Home;
