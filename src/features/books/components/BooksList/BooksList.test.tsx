import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import { BooksList, BooksListProps } from './index';

describe('<BooksList />', () => {
  const bookProps: BooksListProps = {
    isFetchingBooks: false,
    books: [
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

  test('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<BooksList {...bookProps} />, div);
  });

  test('renders proper amount of books', () => {
    const { container } = render(<BooksList {...bookProps} />);
    expect(container.children[0].children.length).toBe(2);
  });

  test('renders no books when array is empty', () => {
    const bookProps: BooksListProps = {
      isFetchingBooks: false,
      books: [],
    };
    const { container } = render(<BooksList {...bookProps} />);
    expect(container.children[0].children.length).toBe(0);
  });

  test('renders spinner when is loading', () => {
    const bookProps: BooksListProps = {
      isFetchingBooks: true,
      books: [],
    };
    const { container } = render(<BooksList {...bookProps} />);
    expect(container.children[0].children.length).toBe(1);
  });
});
