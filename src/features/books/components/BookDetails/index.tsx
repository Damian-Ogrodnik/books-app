import {
  getCoverSource,
  validateAuthors,
  validateDescription,
  validateInformation,
} from 'features/books/helpers';
import { SelectedBookData } from 'features/books/models';

import * as S from './styles';

interface BookDetailsProps {
  isModalOpen: boolean;
  toogleModal(): void;
  selectedBook: SelectedBookData;
}

export const BookDetails: React.FC<BookDetailsProps> = ({
  isModalOpen,
  toogleModal,
  selectedBook: {
    title,
    authors,
    description,
    publishedDate,
    pageCount,
    imageLinks,
    publisher,
    saleInfo,
  },
}) => (
  <S.Modal isOpen={isModalOpen} onRequestClose={toogleModal} contentLabel="Books Details Modal">
    <S.BasicInfoWrapper>
      <S.BookCover src={getCoverSource(imageLinks)} alt={`${title} cover`} />
      <S.BookDetails>
        <S.Title>Title: {title}</S.Title>
        <S.DetailRow>Author: {validateAuthors(authors)} </S.DetailRow>
        <S.DetailRow>Publisher: {validateInformation(publisher)} </S.DetailRow>
        <S.DetailRow>Published Date: {validateInformation(publishedDate)}</S.DetailRow>
        <S.DetailRow>Page count: {validateInformation(pageCount)}</S.DetailRow>
      </S.BookDetails>
    </S.BasicInfoWrapper>
    <S.Description>{validateDescription(description)}</S.Description>
    {saleInfo?.buyLink && (
      <S.BuyLink href={saleInfo?.buyLink} target="_blank">
        Buy
      </S.BuyLink>
    )}
    <S.CloseButton onClick={toogleModal}>&#x2715;</S.CloseButton>
  </S.Modal>
);
