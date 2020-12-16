import { combineReducers } from 'redux';

import { booksReducer } from 'features/books/reducers/booksReducer';

export const rootReducer = combineReducers({
  booksState: booksReducer,
});
