import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { filter, catchError, map, switchMap, pluck, debounceTime } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { Epic } from 'common/models/epicModel';
// import { HttpError } from 'common/models/httpErrorModels';

import { BooksService } from '../services/booksService';
import * as actions from '../actions/booksActions';

export const booksEpicFactory = (productsService: any): Epic => {
  const getBooks: Epic = action$ => action$;

  return combineEpics(getBooks);
};
