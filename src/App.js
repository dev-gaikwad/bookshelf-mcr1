import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import { BookContextProvider } from './context/BooksContext';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <BookContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </BookContextProvider>
      </Router>
    </>
  );
};

export default App;
