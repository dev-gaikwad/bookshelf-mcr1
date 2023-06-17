import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchPage.css';
import { BooksContext } from '../../context/BooksContext';
import BookCard from '../../components/BookCard/BookCard';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { allBooks } = useContext(BooksContext);
  const navigate = useNavigate();

  let foundBooks = [];

  if (searchTerm) {
    const booksArray = [...allBooks];
    foundBooks = booksArray.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <main>
      <input
        type='text'
        placeholder='Search by Book Title'
        className='search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm ? (
        foundBooks.length ? (
          <section>
            <h1>Result</h1>
            <div className='card-container'>
              {foundBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        ) : (
          <h2>
            Looks like the books you are looking for is not in our database
          </h2>
        )
      ) : (
        <></>
      )}

      <section>
        <h1>Our Database</h1>
        <div className='card-container'>
          {allBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
