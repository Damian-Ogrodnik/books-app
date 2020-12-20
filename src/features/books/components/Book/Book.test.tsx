import React from 'react';
import { render } from '@testing-library/react';

import { Book } from './index';
import { Book as BookProps } from '../../models';
import ReactDOM from 'react-dom';

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

  test('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book {...bookProps} />, div);
  });

  test('it always renders book cover', () => {
    const { getByRole } = render(<Book {...bookProps} />);
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
    const { findByText } = render(<Book {...bookProps} />);
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
    const { findByText } = render(<Book {...bookProps} />);
    const information = await findByText('No author data');

    expect(information).toBeTruthy();
  });
});
