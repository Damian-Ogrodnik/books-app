import styled from 'styled-components';

import { fontSize, colors } from 'config/variablesConfig';
import { mediaQueriesHelper } from 'common/helpers/mediaQueriesHelper';

export const Book = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
  margin: 1.5rem 0rem;
  padding: 1rem;
  background-color: ${colors.white};

  ${mediaQueriesHelper.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-size: ${fontSize.big};
`;

export const CoverImage = styled.img`
  height: 15rem;
  width: 10rem;
`;

export const Author = styled.p`
  font-size: ${fontSize.small};
  font-style: italic;
`;
