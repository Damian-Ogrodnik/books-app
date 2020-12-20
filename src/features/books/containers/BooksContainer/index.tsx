import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromEvent } from 'rxjs';

import { BooksList } from '../../components/BooksList';
import { BooksSearch } from '../../components/BooksSearch';
import { BookDetails } from '../../components/BookDetails';
import { getBooksAsync, getNextBooksAsync } from '../../actions/booksActions';
import {
  getBooks,
  getIsFetchingBooks,
  getNextBookIndex,
  getNumberOfFoundedBooks,
} from '../../selectors/booksSelector';
import { SearchPayload } from '../../models';
import * as S from './styles';

export const BooksContainer: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchPayload>({
    bookTitle: '',
    bookAuthor: '',
  });
  const [displayInstruction, setDisplayInstruction] = useState(true);

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
  }, [searchState, nextBookIndex, numberOfFoundedBooks, dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayInstruction(false);
    dispatch(getBooksAsync.request(searchState));
  };

  const displayInformation = () =>
    displayInstruction ? (
      <S.Information>Enter book title or author to search.</S.Information>
    ) : !books.length && !isFetchingBooks ? (
      <S.Information>Nothing found...</S.Information>
    ) : null;

  return (
    <S.BooksContainerWrapper>
      <BooksSearch
        searchState={searchState}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      {displayInformation()}
      <BooksList books={books} isFetchingBooks={isFetchingBooks} />
      <BookDetails />
    </S.BooksContainerWrapper>
  );
};
