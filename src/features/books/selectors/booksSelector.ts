import { createSelector } from 'reselect';

import { AppState } from 'common/models/appStateModel';

export const getCandidateViewState = (state: AppState) => state.booksState;
export const getIsFetchingBooks = createSelector(
  getCandidateViewState,
  state => state.isFetchingBooks,
);
export const getFoundedBooksNumber = createSelector(
  getCandidateViewState,
  state => state.booksData?.totalItems,
);
export const getBooks = createSelector(
  getCandidateViewState,
  state => state.booksData?.items || [],
);
export const getBooksError = createSelector(getCandidateViewState, state => state.error);
