import { createAsyncAction, createAction } from 'typesafe-actions';

export const getProductsAsync = createAsyncAction(
  'GET_BOOKS_REQUESTED',
  'GET_BOOKS_SUCCEED',
  'GET_BOOKS_FAILED',
)<any, any, any>();

export const setSearchProductsParse = createAction('SET_SEARCH_PRODUCTS_PARSE')<string>();
export const setPromoProductsFilter = createAction('SET_PROMO_PRODUCTS_FILTER')<boolean>();
export const setActiveProductsFilter = createAction('SET_ACTIVE_PRODUCTS_FILTER')<boolean>();
