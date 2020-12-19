import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';

import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';
import { getBooksAsync, getNextBooksAsync } from '../actions/booksActions';
import {
  getBooks,
  getIsFetchingBooks,
  getNextBookIndex,
  getNumberOfFoundedBooks,
} from '../selectors/booksSelector';
import { SearchPayload } from '../models';

export const BooksContainer: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchPayload>({
    bookTitle: '',
    bookAuthor: '',
    bookLanguage: '',
  });
  const books = useSelector(getBooks);
  const nextBookIndex = useSelector(getNextBookIndex);
  const numberOfFoundedBooks = useSelector(getNumberOfFoundedBooks);
  const isFetchingBooks = useSelector(getIsFetchingBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    const booksFetchScrollListener = fromEvent(window, 'scroll').subscribe(() => {
      if (
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight &&
        numberOfFoundedBooks > nextBookIndex
      ) {
        dispatch(getNextBooksAsync.request({ ...searchState, nextBookIndex }));
      }
    });
    return () => booksFetchScrollListener.unsubscribe();
  }, [searchState, nextBookIndex, dispatch]);

  const checkIfInstructionIsNeeded = () =>
    Object.values(searchState).every(searchPhrase => !searchPhrase) && !books.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getBooksAsync.request(searchState));
  };

  return (
    <div>
      <BooksSearch
        searchState={searchState}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {checkIfInstructionIsNeeded() ? (
        <div>Type to search</div>
      ) : (
        <BooksList books={books} isFetchingBooks={isFetchingBooks} />
      )}
    </div>
  );
};
