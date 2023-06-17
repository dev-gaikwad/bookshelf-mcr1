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
        <h3>Currently Reading</h3>
        <div className='card-container'>
          {currentlyReadingBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h3>Want to Read</h3>
        <div className='card-container'>
          {wantToReadBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section>
        <h3>Already Read</h3>
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
