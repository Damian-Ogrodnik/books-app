import { createAsyncAction } from 'typesafe-actions';

import { Book } from '../models';

export const getBooksAsync = createAsyncAction(
  'GET_BOOKS_REQUESTED',
  'GET_BOOKS_SUCCEED',
  'GET_BOOKS_FAILED',
)<string, Book[], string>();

// export const setSearchProductsParse = createAction('SET_SEARCH_PRODUCTS_PARSE')<string>();
// export const setPromoProductsFilter = createAction('SET_PROMO_PRODUCTS_FILTER')<boolean>();
// export const setActiveProductsFilter = createAction('SET_ACTIVE_PRODUCTS_FILTER')<boolean>();
