import { Outlet, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/about/second-route')}>Show Home</button>
      <button onClick={() => navigate('/about/third-route')}>Show Users</button>
      <Outlet />
    </div>
  );
};

export default AboutPage;
