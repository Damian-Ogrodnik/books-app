import { Provider } from 'react-redux';

import { store } from './core/store';
import { GlobalStyles } from './core/GlobalStyles';

import { BooksContainer } from './features/books/containers/BooksContainer';

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BooksContainer />
  </Provider>
);
