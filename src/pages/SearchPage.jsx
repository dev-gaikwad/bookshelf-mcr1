import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BooksContext } from '../context/BooksContext';
import BookCard from '../components/BookCard/BookCard';

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
    <>
      <button onClick={() => navigate('/')}>Go to Home</button>

      <input
        type='text'
        placeholder='Search by Book Title'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm ? (
        foundBooks.length ? (
          <section>
            <h3>Result</h3>
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
        <h3>Our Database</h3>
        <div className='card-container'>
          {allBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
