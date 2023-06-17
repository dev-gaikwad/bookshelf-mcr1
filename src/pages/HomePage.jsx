import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate('/search')}>Search</button>
    </>
  );
};

export default HomePage;
