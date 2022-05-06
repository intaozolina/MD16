import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <span>Home Page</span>
      <button onClick={() => navigate('/about')}>Go to About Page</button>
    </div>
  );
};

export default HomePage;
