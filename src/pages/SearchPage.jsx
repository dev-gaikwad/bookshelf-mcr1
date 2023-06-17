import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  );
};

export default SearchPage;
