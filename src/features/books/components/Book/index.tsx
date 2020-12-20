import { useState } from 'react';

import { Book as BookData, BookInfo } from 'features/books/models';
import DefaultCover from 'assets/images/DefaultCover.png';

import * as S from './styles';

interface ActionProps {
  setSelectedBook(book: BookInfo): void;
  toogleModal(): void;
}

export const Book: React.FC<BookData & ActionProps> = ({
  volumeInfo,
  toogleModal,
  setSelectedBook,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const openDetailsModal = () => {
    setSelectedBook(volumeInfo);
    toogleModal();
  };

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
          <S.DetailsButton onClick={openDetailsModal}>Details</S.DetailsButton>
        </S.ButtonsWrapper>
      </S.BookDetails>
    </S.Book>
  );
};
