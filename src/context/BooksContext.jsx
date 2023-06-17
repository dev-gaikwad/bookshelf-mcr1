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

  const updateBookStatus = (id, status) => {
    const bookArray = [...allBooks];
    const bookIndex = bookArray.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      bookArray[bookIndex] = { ...bookArray[bookIndex], status: status };
      setAllBooks(bookArray);
    }
  };

  const markReadHandler = (id) => {
    updateBookStatus(id, 'read');
  };

  const addToCurrentlyReading = (id) => {
    updateBookStatus(id, 'currently-reading');
  };

  const addToWantToRead = (id) => {
    updateBookStatus(id, 'want-to-read');
  };

  return (
    <BooksContext.Provider
      value={{
        allBooks,
        currentlyReadingBooks,
        readBooks,
        wantToReadBooks,
        markReadHandler,
        addToCurrentlyReading,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
