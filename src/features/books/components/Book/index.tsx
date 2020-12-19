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
        <S.DescriptionButton onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? 'Hide' : 'Show'} description
        </S.DescriptionButton>
        <S.BookDescription showDescription={showDescription}>
          {volumeInfo.description || 'No description provided'}
        </S.BookDescription>
        <S.Author>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No author data'}</S.Author>
      </S.BookDetails>
    </S.Book>
  );
};
