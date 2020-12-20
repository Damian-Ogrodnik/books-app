import styled from 'styled-components';

import { colors } from 'config/variablesConfig';
import Loupe from 'assets/images/loupe.svg';

import { mediaQueriesHelper } from 'common/helpers/mediaQueriesHelper';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  padding: 1.5rem 5rem;
  background-color: ${colors.black};

  ${mediaQueriesHelper.medium} {
    padding: 1.5rem 2.5rem;
  }

  ${mediaQueriesHelper.small} {
    position: relative;
    padding: 1.5rem 1rem;
  }
`;

export const BooksSearch = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueriesHelper.medium} {
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  background-color: ${colors.lightGray};

  ${mediaQueriesHelper.small} {
    flex-direction: column;
    width: 90%;
  }
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  margin: 0.5rem;

  ${mediaQueriesHelper.small} {
    margin: 0.25rem 0;
  }
`;

export const InputField = styled.input`
  padding: 0.5rem 0.25rem;
  outline-color: ${colors.lightOrange};

  ${mediaQueriesHelper.small} {
    width: 100%;
  }
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

  ${mediaQueriesHelper.small} {
    height: 2.5rem;
    width: 100%;
    border: 0;
    border-radius: 0;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;

  ${mediaQueriesHelper.medium} {
    display: none;
  }
`;
