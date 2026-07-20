import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Price from './Price';

const Book = ({ book }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;

    const handleLoad = () => setLoaded(true);
    image.onload = handleLoad;

    // If already cached, force trigger load event manually
    if (image.complete) handleLoad();

    return () => {
      image.onload = null; // cleanup
    };
  }, [book.url]);

  return (
    <div className="book">
      {loaded ? (
        <>
          <Link to={`/book/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={book.url} alt={book.title} className="book__img book__img--visible" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/book/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton rating--skeleton"></div>
          <div className="skeleton price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;