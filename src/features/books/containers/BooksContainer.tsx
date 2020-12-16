import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';
import { getBooksAsync } from '../actions/booksActions';
import { getBooks } from '../selectors/booksSelector';

export const BooksContainer: React.FC = () => {
  const [bookTitle, setBookTitle] = useState('');
  const books = useSelector(getBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request('random'));
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
