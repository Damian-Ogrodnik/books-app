import { Book as BookData } from 'features/books/models';
import DefaultCover from 'assets/images/DefaultCover.png';

import * as S from './styles';

export const Book: React.FC<BookData> = ({ volumeInfo }) => (
  <S.Book>
    <S.CoverImage
      src={volumeInfo.imageLinks?.thumbnail || DefaultCover}
      alt={`${volumeInfo.title} cover`}
    />
    <div>
      <S.Title>{volumeInfo.title}</S.Title>
      <p>{volumeInfo.description || 'No description provided'}</p>
      <S.Author>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No author data'}</S.Author>
    </div>
  </S.Book>
);
