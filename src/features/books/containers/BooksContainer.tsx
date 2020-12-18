import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';

import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';
import { getBooksAsync, getNextBooksAsync } from '../actions/booksActions';
import { getBooks, getNextBookIndex } from '../selectors/booksSelector';

export const BooksContainer: React.FC = () => {
  const [bookTitle, setBookTitle] = useState('');
  const books = useSelector(getBooks);
  const nextBookIndex = useSelector(getNextBookIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request('random'));
  }, []);

  useEffect(() => {
    const booksFetchScrollListener = fromEvent(window, 'scroll').subscribe(() => {
      if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
        dispatch(getNextBooksAsync.request({ searchPhrase: 'random', nextBookIndex }));
      }
    });

    return () => booksFetchScrollListener.unsubscribe();
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBooksAsync.request(bookTitle));
  };

  return (
    <div>
      <BooksSearch bookTitle={bookTitle} setBookTitle={setBookTitle} handleSearch={handleSearch} />
      <BooksList books={books} />
    </div>
  );
};
