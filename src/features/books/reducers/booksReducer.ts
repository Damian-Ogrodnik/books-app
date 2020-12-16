import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/booksActions';
import { Book } from '../models';

export interface BooksState {
  books: Book[];
  isFetchingBooks: boolean;
  error: string;
}

export const defaultBooksState: BooksState = {
  books: [],
  isFetchingBooks: false,
  error: '',
};

export const booksReducer = createReducer<BooksState, AppAction>(defaultBooksState)
  .handleAction(actions.getBooksAsync.request, state => ({
    ...state,
    isFetchingBooks: true,
  }))
  .handleAction(actions.getBooksAsync.success, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    books: action.payload,
  }))
  .handleAction(actions.getBooksAsync.failure, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    error: action.payload,
  }));
