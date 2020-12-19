import { ChangeEvent, FormEvent } from 'react';

import { SearchPayload } from 'features/books/models';

import * as S from './styles';

interface BooksSearchProps {
  searchState: SearchPayload;
  handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void;
  handleSearch(e: FormEvent<HTMLFormElement>): void;
}

export const BooksSearch: React.FC<BooksSearchProps> = ({
  searchState: { bookTitle, bookAuthor, bookLanguage },
  handleChange,
  handleSearch,
}) => (
  <S.NavBar>
    <S.BooksSearch>
      <S.Form onSubmit={handleSearch}>
        <S.InputFieldWrapper>
          <S.InputLabel htmlFor="bookTitle">Title</S.InputLabel>
          <input
            type="text"
            name="bookTitle"
            value={bookTitle}
            onChange={handleChange}
            placeholder="Book title"
          />
        </S.InputFieldWrapper>
        <S.InputFieldWrapper>
          <S.InputLabel htmlFor="bookAuthor">Author</S.InputLabel>
          <input
            type="text"
            name="bookAuthor"
            value={bookAuthor}
            onChange={handleChange}
            placeholder="Book Author"
          />
        </S.InputFieldWrapper>
        <S.SearchButton type="submit">Search</S.SearchButton>
      </S.Form>
    </S.BooksSearch>
  </S.NavBar>
);
