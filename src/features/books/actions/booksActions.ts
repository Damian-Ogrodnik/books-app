import { createAsyncAction, createAction } from 'typesafe-actions';

import { BooksData, NextPagePayload } from '../models';

export const getBooksAsync = createAsyncAction(
  'GET_BOOKS_REQUESTED',
  'GET_BOOKS_SUCCEED',
  'GET_BOOKS_FAILED',
)<string, BooksData, string>();

export const getNextBooksAsync = createAsyncAction(
  'GET_NEXT_BOOKS_REQUESTED',
  'GET_NEXT_BOOKS_SUCCEED',
  'GET_NEXT_BOOKS_FAILED',
)<NextPagePayload, BooksData, string>();

export const setNextBookIndex = createAction('SET_NEXT_BOOK_INDEX')<void>();
