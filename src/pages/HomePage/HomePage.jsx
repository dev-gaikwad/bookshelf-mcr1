import React, { useContext } from 'react';

import './HomePage.css';
import { BooksContext } from '../../context/BooksContext';
import BookCard from '../../components/BookCard/BookCard';

const HomePage = () => {
  const { currentlyReadingBooks, readBooks, wantToReadBooks } =
    useContext(BooksContext);
  return (
    <main>
      <section>
        <h1>Currently Reading</h1>
        <div className='card-container'>
          {currentlyReadingBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h1>Want to Read</h1>
        <div className='card-container'>
          {wantToReadBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h1>Already Read</h1>
        <div className='card-container'>
          {readBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
