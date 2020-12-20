import { Provider } from 'react-redux';
import Modal from 'react-modal';

import { store } from './core/store';
import { GlobalStyles } from './core/GlobalStyles';
import { BooksContainer } from './features/books/containers/BooksContainer';

Modal.setAppElement('#root');

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <BooksContainer />
  </Provider>
);
