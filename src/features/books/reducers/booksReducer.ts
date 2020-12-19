import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/booksActions';
import { BooksData } from '../models';
import { BOOKS_ON_REQUEST } from 'config/apiConfig';

export interface BooksState {
  booksData?: BooksData;
  isFetchingBooks: boolean;
  error: string;
  nextBookIndex: number;
}

export const defaultBooksState: BooksState = {
  booksData: undefined,
  isFetchingBooks: false,
  error: '',
  nextBookIndex: 1,
};

export const booksReducer = createReducer<BooksState, AppAction>(defaultBooksState)
  .handleAction(actions.getBooksAsync.request, state => ({
    ...state,
    isFetchingBooks: true,
  }))
  .handleAction(actions.getBooksAsync.success, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    booksData: action.payload,
    nextBookIndex: 1,
  }))
  .handleAction(actions.getBooksAsync.failure, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    error: action.payload,
  }))
  .handleAction(actions.getNextBooksAsync.request, state => ({
    ...state,
    isFetchingBooks: true,
  }))
  .handleAction(actions.getNextBooksAsync.success, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    booksData: state.booksData && {
      ...state.booksData,
      items: action.payload.items
        ? [...state.booksData.items, ...action.payload.items]
        : state.booksData.items,
    },
  }))
  .handleAction(actions.getNextBooksAsync.failure, (state, action) => ({
    ...state,
    isFetchingBooks: false,
    error: action.payload,
  }))
  .handleAction(actions.setNextBookIndex, state => ({
    ...state,
    nextBookIndex: state.nextBookIndex + BOOKS_ON_REQUEST,
  }));
