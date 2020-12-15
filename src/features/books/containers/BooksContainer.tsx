import { BooksList } from '../components/BooksList';
import { BooksSearch } from '../components/BooksSearch';

export const BooksContainer: React.FC = () => (
  <div>
    <BooksSearch />
    <BooksList />
  </div>
);
