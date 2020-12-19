import styled from 'styled-components';

import { colors, fontSize } from 'config/variablesConfig';
import Loupe from 'assets/images/loupe.svg';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  padding: 1.5rem 5rem;
  background-color: ${colors.black};
`;

export const BooksSearch = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const Form = styled.form`
  display: flex;
  background-color: ${colors.lightGray};
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  margin: 0.5rem;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -10px;
  color: ${colors.lightOrange};
  font-size: ${fontSize.tiny};
`;

export const InputField = styled.input`
  padding: 0.5rem 0.25rem;
  outline-color: ${colors.lightOrange};
`;

export const SearchButton = styled.button`
  cursor: pointer;
  outline-color: ${colors.lightOrange};
  background-color: ${colors.lightOrange};
  background-image: url(${Loupe});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 1.25rem;

  border: 1px solid ${colors.white};
  border-radius: 2px;
  width: 2.5rem;
`;
