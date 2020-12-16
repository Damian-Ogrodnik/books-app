import { FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';
import { getBooksAsync } from '../actions/booksActions';

export const BooksContainer: React.FC = () => {
  const [bookTitle, setBookTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request('random'));
  }, [dispatch]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBooksAsync.request(bookTitle));
  };

  return (
    <div>
      <BooksSearch bookTitle={bookTitle} setBookTitle={setBookTitle} handleSearch={handleSearch} />
      <BooksList />
    </div>
  );
};
