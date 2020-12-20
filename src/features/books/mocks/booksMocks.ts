import { BooksData, NextPagePayload } from '../models';

export const BOOKS_ON_REQUEST = 10;

export const requestPayloadData: NextPagePayload = {
  bookTitle: 'Random',
  bookAuthor: 'Joe',
  nextBookIndex: 1,
};

export const emptyPayloadData: NextPagePayload = {
  bookTitle: '',
  bookAuthor: '',
  nextBookIndex: 0,
};

export const booksMock: BooksData = {
  kind: 'Book',
  totalItems: 2,
  items: [
    {
      id: 'id1',
      selfLink: 'https://photo1.com',
      volumeInfo: {
        title: 'Title',
        authors: ['John'],
        description: 'Very good book',
        imageLinks: {
          thumbnail: 'https://photo1.com/thumbnail',
        },
      },
    },
    {
      id: 'id2',
      selfLink: 'https://photo2.com',
      volumeInfo: {
        title: 'Title 2',
        authors: ['Jenny'],
        description: 'Very bad book',
        imageLinks: {
          thumbnail: 'https://photo2.com/thumbnail',
        },
      },
    },
  ],
};
