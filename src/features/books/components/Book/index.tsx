import { useState } from 'react';

import { Book as BookData, SelectedBookData } from 'features/books/models';
import DefaultCover from 'assets/images/DefaultCover.png';

import * as S from './styles';
import { validateAuthors, validateDescription } from 'features/books/helpers';

interface ActionProps {
  setSelectedBook(book: SelectedBookData): void;
  toogleModal(): void;
}

export const Book: React.FC<BookData & ActionProps> = ({
  volumeInfo,
  saleInfo,
  toogleModal,
  setSelectedBook,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const openDetailsModal = () => {
    setSelectedBook({ ...volumeInfo, saleInfo });
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
        <S.Author>{validateAuthors(volumeInfo.authors)}</S.Author>
        <S.BookDescription showDescription={showDescription}>
          {validateDescription(volumeInfo.description)}
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
