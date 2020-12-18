import { combineEpics } from 'redux-observable';
import { filter, catchError, map, switchMap, pluck, debounceTime, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

import { Epic } from 'common/models/epicModel';
import { HttpError } from 'common/models/httpErrorModels';

import { BooksService } from '../services/booksService';
import * as actions from '../actions/booksActions';
import { NextPagePayload } from '../models';

export const booksEpicFactory = (booksService: BooksService): Epic => {
  const getBooks: Epic = action$ =>
    action$.pipe(
      filter(isActionOf(actions.getBooksAsync.request)),
      debounceTime(500),
      pluck('payload'),
      switchMap(data =>
        booksService.getBooks(data).pipe(
          map(actions.getBooksAsync.success),
          catchError((error: HttpError) => of(actions.getBooksAsync.failure(error.message))),
        ),
      ),
    );

  const getNextBooks: Epic = action$ =>
    action$.pipe(
      filter(isActionOf(actions.getNextBooksAsync.request)),
      pluck('payload'),
      switchMap(({ searchPhrase, nextBookIndex }: NextPagePayload) =>
        booksService.getBooks(searchPhrase, nextBookIndex).pipe(
          map(actions.getNextBooksAsync.success),
          catchError((error: HttpError) => of(actions.getNextBooksAsync.failure(error.message))),
        ),
      ),
    );

  const setNextBookIndex: Epic = action$ =>
    action$.pipe(
      filter(isActionOf([actions.getBooksAsync.success, actions.getNextBooksAsync.success])),
      map(() => actions.setNextBookIndex()),
    );

  return combineEpics(getBooks, getNextBooks, setNextBookIndex);
};
