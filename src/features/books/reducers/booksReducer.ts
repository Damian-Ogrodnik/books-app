import { createReducer } from 'typesafe-actions';

import { AppAction } from 'common/models/actionModel';

import * as actions from '../actions/booksActions';

export interface BooksState {
  products: any;
}

export const defaultBooksState: BooksState = {
  products: [],
};

export const booksReducer = createReducer<BooksState, AppAction>(defaultBooksState)
  .handleAction(actions.getProductsAsync.request, state => ({
    ...state,
    isFetchingProducts: true,
  }))
  .handleAction(actions.getProductsAsync.success, (state, action) => ({
    ...state,
    isFetchingProducts: false,
    products: action.payload.products,
    meta: action.payload.meta,
  }))
  .handleAction(actions.getProductsAsync.failure, (state, action) => ({
    ...state,
    isFetchingProducts: false,
    networkError: action.payload,
  }))
  .handleAction(actions.setSearchProductsParse, (state, action) => ({
    ...state,
    searchParse: action.payload,
  }))
  .handleAction(actions.setActiveProductsFilter, (state, action) => ({
    ...state,
    activeFilter: action.payload,
  }))
  .handleAction(actions.setPromoProductsFilter, (state, action) => ({
    ...state,
    promoFilter: action.payload,
  }));
