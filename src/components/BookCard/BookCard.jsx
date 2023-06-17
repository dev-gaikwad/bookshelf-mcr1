import React, { useContext } from 'react';
import { BooksContext } from '../../context/BooksContext';

import './BookCard.css';

const BookCard = ({ book }) => {
  const { id, title, author, genre, image, status } = book;

  const { markReadHandler, addToCurrentlyReading } = useContext(BooksContext);
  return (
    <article className='book-card'>
      <div className='book-image'>
        <img src={image} alt={title} />
      </div>
      <div className='book-description'>
        <div className='book-title'>
          <h3>{title}</h3>
        </div>
        <div className='book-info-header'>
          <div className='book-author'>{author}</div>
          <div className='book-genre'>
            <p>{genre}</p>
          </div>
        </div>
      </div>

      {status === 'currently-reading' && (
        <div className='book-card-buttons-container'>
          <button onClick={() => markReadHandler(id)}>Mark Read</button>
        </div>
      )}
      {status === 'want-to-read' && (
        <div className='book-card-buttons-container'>
          <button onClick={() => addToCurrentlyReading(id)}>
            Add to Currently Reading
          </button>
          <button onClick={() => markReadHandler(id)}>Mark Read</button>
        </div>
      )}
      {status === 'read' && (
        <div className='book-card-buttons-container'>
          <button>Want to Read Again</button>
          <button onClick={() => addToCurrentlyReading(id)}>
            Reading Again
          </button>
        </div>
      )}
    </article>
  );
};

export default BookCard;
