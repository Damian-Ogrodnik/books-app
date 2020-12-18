import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

export const getBooksState = (state: AppState) => state.booksState;
export const getIsFetchingBooks = createSelector(getBooksState, state => state.isFetchingBooks);
export const getFoundedBooksNumber = createSelector(
  getBooksState,
  state => state.booksData?.totalItems,
);
export const getBooks = createSelector(getBooksState, state => state.booksData?.items || []);
export const getBooksError = createSelector(getBooksState, state => state.error);
export const getNextBookIndex = createSelector(getBooksState, state => state.nextBookIndex);
