import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import { Book } from './index';
import { Book as BookProps } from '../../models';

describe('<Book />', () => {
  const bookProps: BookProps = {
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
  };

  const actionProps = {
    toogleModal: () => undefined,
    setSelectedBook: () => undefined,
  };

  test('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book {...bookProps} {...actionProps} />, div);
  });

  test('it always renders book cover', () => {
    const { getByRole } = render(<Book {...bookProps} {...actionProps} />);
    expect(getByRole('img')).toBeTruthy();
  });

  test('it renders information when there is no description data', async () => {
    const bookProps: BookProps = {
      id: 'id1',
      selfLink: 'https://photo1.com',
      volumeInfo: {
        title: 'Title',
        authors: ['John'],
        description: '',
        imageLinks: {
          thumbnail: 'https://photo1.com/thumbnail',
        },
      },
    };
    const { findByText } = render(<Book {...bookProps} {...actionProps} />);
    const information = await findByText('No description provided');

    expect(information).toBeTruthy();
  });

  test('it renders information when there is no authors data', async () => {
    const bookProps: BookProps = {
      id: 'id1',
      selfLink: 'https://photo1.com',
      volumeInfo: {
        title: 'Title',
        authors: [],
        description: 'Short description',
        imageLinks: {
          thumbnail: 'https://photo1.com/thumbnail',
        },
      },
    };

    const { findByText } = render(<Book {...bookProps} {...actionProps} />);
    const information = await findByText('No author data');

    expect(information).toBeTruthy();
  });
});
