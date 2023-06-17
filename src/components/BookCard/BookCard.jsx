import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { id, title, author, genre, image, status } = book;
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
          <button>Mark Read</button>
        </div>
      )}
      {status === 'want-to-read' && (
        <div className='book-card-buttons-container'>
          <button>Add to Currently Reading</button>
          <button>Mark Read</button>
        </div>
      )}
      {status === 'read' && (
        <div className='book-card-buttons-container'>
          <button>Want to Read Again</button>
          <button>Reading Again</button>
        </div>
      )}
    </article>
  );
};

export default BookCard;
