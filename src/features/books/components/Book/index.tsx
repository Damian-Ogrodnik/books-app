import { useState } from 'react';

import { Book as BookData } from 'features/books/models';
import DefaultCover from 'assets/images/DefaultCover.png';

import * as S from './styles';

export const Book: React.FC<BookData> = ({ volumeInfo }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <S.Book>
      <S.CoverImage
        src={volumeInfo.imageLinks?.thumbnail || DefaultCover}
        alt={`${volumeInfo.title} cover`}
      />
      <S.BookDetails>
        <S.Title>{volumeInfo.title}</S.Title>
        <S.Author>
          {volumeInfo.authors?.length ? volumeInfo.authors.join(', ') : 'No author data'}
        </S.Author>

        <S.BookDescription showDescription={showDescription}>
          {volumeInfo.description || 'No description provided'}
        </S.BookDescription>

        <S.ButtonsWrapper>
          <S.DescriptionButton onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Hide' : 'Show'} description
          </S.DescriptionButton>
          <S.DetailsButton>Details</S.DetailsButton>
        </S.ButtonsWrapper>
      </S.BookDetails>
    </S.Book>
  );
};
