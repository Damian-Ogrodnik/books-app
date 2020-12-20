import { ChangeEvent, FormEvent } from 'react';

import { SearchPayload } from 'features/books/models';
import Logo from 'assets/images/book.svg';

import * as S from './styles';

interface BooksSearchProps {
  searchState: SearchPayload;
  handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void;
  handleSearch(e: FormEvent<HTMLFormElement>): void;
}

export const BooksSearch: React.FC<BooksSearchProps> = ({
  searchState: { bookTitle, bookAuthor },
  handleChange,
  handleSearch,
}) => (
  <S.NavBar>
    <S.BooksSearch>
      <S.Logo src={Logo} alt="Book logo" />
      <S.Form onSubmit={handleSearch}>
        <S.InputFieldWrapper>
          <S.InputField
            type="text"
            name="bookTitle"
            value={bookTitle}
            onChange={handleChange}
            placeholder="Book title"
          />
        </S.InputFieldWrapper>
        <S.InputFieldWrapper>
          <S.InputField
            type="text"
            name="bookAuthor"
            value={bookAuthor}
            onChange={handleChange}
            placeholder="Book Author"
          />
        </S.InputFieldWrapper>
        <S.SearchButton type="submit" />
      </S.Form>
    </S.BooksSearch>
  </S.NavBar>
);
