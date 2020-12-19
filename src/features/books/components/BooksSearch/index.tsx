import { ChangeEvent, FormEvent } from 'react';

import { SearchPayload } from 'features/books/models';
import * as S from './styles';

interface BooksSearchProps {
  searchState: SearchPayload;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSearch(e: FormEvent<HTMLFormElement>): void;
}

export const BooksSearch: React.FC<BooksSearchProps> = ({
  searchState: { bookTitle, bookAuthor, bookLanguage },
  handleChange,
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
          onChange={handleChange}
          placeholder="Book title"
        />
      </label>
      <label htmlFor="bookAuthor">
        Author
        <input
          type="text"
          name="bookAuthor"
          value={bookAuthor}
          onChange={handleChange}
          placeholder="Book Author"
        />
      </label>
      <label htmlFor="bookLanguage">
        Language
        <input
          type="text"
          name="bookLanguage"
          value={bookLanguage}
          onChange={handleChange}
          placeholder="Book language"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  </S.BooksSearch>
);
