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
  margin-bottom: 0.25rem;

  ${mediaQueriesHelper.small} {
    font-size: ${fontSize.normal};
  }
`;

export const CoverImage = styled.img`
  height: 15rem;
  width: 10rem;
`;

export const BookDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Author = styled.p`
  font-size: ${fontSize.small};
  font-style: italic;
  text-transform: capitalize;

  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  background-color: ${colors.lightOrange};
  color: ${colors.white};
  border: 3px solid ${colors.lightOrange};
  border-radius: 10px;
  text-transform: uppercase;
  padding: 0.5rem;
`;

export const DescriptionButton = styled(Button)`
  display: none;
  ${mediaQueriesHelper.small} {
    display: block;
  }
`;

interface BookDescriptionProps {
  showDescription: boolean;
}

export const BookDescription = styled.p<BookDescriptionProps>`
  display: block;
  text-align: justify;

  ${mediaQueriesHelper.small} {
    display: ${({ showDescription }) => (showDescription ? 'block' : 'none')};
  }
`;

export const DetailsButton = styled(Button)``;

export const ButtonsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${mediaQueriesHelper.medium} {
    margin-top: 1rem;
    justify-content: space-between;
  }
`;
