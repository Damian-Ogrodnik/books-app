import styled from 'styled-components';

import { colors, fontSize } from 'config/variablesConfig';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  padding: 1.5rem 5rem;
  background-color: ${colors.black};
`;

export const BooksSearch = styled.header``;

export const Form = styled.form`
  display: flex;
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

export const SearchButton = styled.button`
  cursor: pointer;
`;
