import DefaultCover from 'assets/images/DefaultCover.png';

import { ImageLinks } from '../models';

export const getCoverSource = (imageLinks: ImageLinks | undefined) =>
  imageLinks?.large || imageLinks?.medium || imageLinks?.thumbnail || DefaultCover;
