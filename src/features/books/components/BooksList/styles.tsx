import styled from 'styled-components';

import { mediaQueriesHelper } from 'common/helpers/mediaQueriesHelper';

export const BooksList = styled.main`
  margin: 0rem 5rem;

  ${mediaQueriesHelper.medium} {
    margin: 0rem 2.5rem;
  }

  ${mediaQueriesHelper.small} {
    margin: 0rem 1rem;
  }
`;
