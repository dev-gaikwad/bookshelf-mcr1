import { createContext, useContext, useEffect, useState } from 'react';

import { booksData } from '../data/data';

export const BooksContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState(booksData);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);

  useEffect(() => {
    setCurrentlyReadingBooks(
      allBooks.filter((book) => book.status === 'currently-reading')
    );

    setReadBooks(allBooks.filter((book) => book.status === 'read'));

    setWantToReadBooks(
      allBooks.filter((book) => book.status === 'want-to-read')
    );
  }, [allBooks]);

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        setAllBooks,
        currentlyReadingBooks,
        setCurrentlyReadingBooks,
        readBooks,
        setReadBooks,
        wantToReadBooks,
        setWantToReadBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
