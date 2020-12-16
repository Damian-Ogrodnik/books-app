import { FormEvent } from 'react';

import * as S from './styles';

interface BooksSearchProps {
  bookTitle: string;
  setBookTitle(bookTitle: string): void;
  handleSearch(e: FormEvent<HTMLFormElement>): void;
}

export const BooksSearch: React.FC<BooksSearchProps> = ({
  bookTitle,
  setBookTitle,
  handleSearch,
}) => (
  <S.BooksSearch>
    <form onSubmit={handleSearch}>
      <label htmlFor="bookTitle">
        Title
        <input
          type="text"
          name="bookTitle"
          value={bookTitle}
          onChange={e => setBookTitle(e.target.value)}
          placeholder="Book title"
        />
        <button type="submit">Search</button>
      </label>
    </form>
  </S.BooksSearch>
);
