import { Book as BookData } from 'features/books/models';
import { Spinner } from 'common/components/Spinner';

import * as S from './styles';
import { Book } from '../Book';

interface BooksListProps {
  books: BookData[];
  isFetchingBooks: boolean;
}

export const BooksList: React.FC<BooksListProps> = ({ books, isFetchingBooks }) => (
  <S.BooksList>
    {books.map(book => (
      <Book key={book.id} {...book} />
    ))}
    {isFetchingBooks && <Spinner />}
  </S.BooksList>
);
