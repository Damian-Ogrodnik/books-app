import { Book as BookData, SelectedBookData } from 'features/books/models';
import { Spinner } from 'common/components/Spinner';

import * as S from './styles';
import { Book } from '../Book';

export interface BooksListProps {
  books: BookData[];
  isFetchingBooks: boolean;
  toogleModal(): void;
  setSelectedBook(book: SelectedBookData): void;
}

export const BooksList: React.FC<BooksListProps> = ({ books, isFetchingBooks, ...props }) => (
  <S.BooksList>
    {books.map((book, index) => (
      <Book key={`${book.id}${index}`} {...props} {...book} />
    ))}
    {isFetchingBooks && <Spinner />}
  </S.BooksList>
);
