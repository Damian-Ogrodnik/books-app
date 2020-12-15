import { Provider } from 'react-redux';

import { store } from './core/store';

import { BooksContainer } from './features/books/containers/BooksContainer';

export const App = () => (
  <Provider store={store}>
    <BooksContainer />
  </Provider>
);
