import { BookInfo } from 'features/books/models';

import * as S from './styles';

const description = `The definitive, bestselling account of the company that changed the way we work and live, updated for the twentieth anniversary of Google’s founding with analysis of its most recent bold moves to redefine the world—and its even more ambitious plans for the future.\u003c/b\u003e\u003cbr\u003e\u003c/b\u003e\u003cbr\u003eMoscow-born Sergey Brin and Midwest-born Larry Page dropped out of graduate school at Stanford University to, as they said, “change the world” through a powerful search engine that would organize every bit of information on the Web for free. \u003ci\u003eThe Google Story\u003c/i\u003e takes you deep inside the company’s wild ride from an idea that struggled for funding in 1998 to a firm that today rakes in billions in profits. Based on scrupulous research and extraordinary access to Google, this fast-moving narrative reveals how an unorthodox management style and a culture of innovation enabled a search-engine giant to shake up Madison Avenue, clash with governments that accuse it of being a monopoly, deploy self-driving cars to forever change how we travel, and launch high-flying Internet balloons. Unafraid of controversy, Google is surging ahead with artificial intelligence that could cure diseases but also displace millions of people from their jobs, testing the founders’ guiding mantra: DON’T BE EVIL.\u003cbr\u003e\u003cb\u003e\u003cbr\u003ePraise for \u003ci\u003eThe Google Story\u003cbr\u003e\u003c/i\u003e\u003c/b\u003e\u003ci\u003e\u003cbr\u003e\u003c/i\u003e“[The authors] do a fine job of recounting Google’s rapid rise and explaining its search business.”\u003cb\u003e—\u003ci\u003eThe New York Times\u003cbr\u003e\u003c/i\u003e\u003c/b\u003e\u003cbr\u003e“An intriguing insider view of the Google culture.”\u003cb\u003e—\u003ci\u003eHarvard Business Review\u003cbr\u003e\u003c/i\u003e\u003c/b\u003e\u003cbr\u003e“An interesting read on a powerhouse company . . . If you haven’t read anything about one of today’s most influential companies, you should. If you don’t read \u003ci\u003eThe Google Story,\u003c/i\u003e you’re missing a few extra treats.”\u003cb\u003e—\u003ci\u003eUSA Today\u003cbr\u003e\u003c/i\u003e\u003c/b\u003e\u003cbr\u003e“Fascinating . . . meticulous . . . never bogs down.”\u003cb\u003e—\u003ci\u003eHouston Chronicle\u003c/i\u003e\u003c/b\u003e"`;
const title = 'The Google Story (2018 Updated Edition)';
const author = 'Jan kowalski';

interface BookDetailsProps {
  isModalOpen: boolean;
  toogleModal(): void;
  selectedBook: BookInfo;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ isModalOpen, toogleModal }) => (
  <S.Modal isOpen={isModalOpen} onRequestClose={toogleModal} contentLabel="Books Details Modal">
    <S.BasicInfoWrapper>
      <S.BookCover src="http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72RxJUia9TIFvU8_DHOc_3q1fLkHvBE3WFmj69CBPx14xVxPpiTtSH_et7Ei0thx0ZX4mynNN7zpALy3_v-I2Jy_6iqGk5DccvtRah4DVmqHRospyylswPhlaeFVI75H8CCQWCy&source=gbs_api" />
      <S.BookDetails>
        <S.Title>Title: {title}</S.Title>
        <S.DetailRow>Author: {author} </S.DetailRow>
        <S.DetailRow>Published Date: {'2005-11-15'}</S.DetailRow>
        <S.DetailRow>Page count: {'314'}</S.DetailRow>
      </S.BookDetails>
    </S.BasicInfoWrapper>
    <S.Description>{description}</S.Description>
    <S.BuyButton>Buy</S.BuyButton>
    <S.CloseButton onClick={toogleModal}>&#x2715;</S.CloseButton>
  </S.Modal>
);
