import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';
import { getBooksAsync } from '../actions/booksActions';

export const BooksContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAsync.request('random'));
  }, [dispatch]);

  return (
    <div>
      <BooksSearch />
      <BooksList />
    </div>
  );
};
