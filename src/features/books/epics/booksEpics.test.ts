import { StateObservable, ActionsObservable } from 'redux-observable';
import { Subject, of, throwError } from 'rxjs';

import { AppState } from 'common/models/appStateModel';
import { mockedBackendError } from 'common/mocks/Error';
import { BooksService } from '../services/booksService';
import { defaultBooksState } from '../reducers/booksReducer';
import { requestPayloadData, booksMock } from '../mocks/booksMocks';
import { booksEpicFactory } from './booksEpics';
import * as actions from '../actions/booksActions';

describe('Products epics', () => {
  const booksServiceMock = BooksService as jest.Mock<BooksService>;
  const mockState = new StateObservable<AppState>(new Subject(), {
    booksState: defaultBooksState,
  });
  let booksService: BooksService;

  beforeEach(() => {
    booksService = new booksServiceMock();
  });

  describe('getBooksEpic', () => {
    it('should fetch books', done => {
      jest.spyOn(booksService, 'getBooks').mockImplementation(() => of(booksMock));

      const booksEpicFactoryInstance = booksEpicFactory(booksService);
      const action$ = of(actions.getBooksAsync.request(requestPayloadData));

      booksEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
        expect(res).toMatchObject(actions.getBooksAsync.success(booksMock));

        done();
      });
    });

    it('should handle error on fetching books', done => {
      jest.spyOn(booksService, 'getBooks').mockImplementation(() => throwError(mockedBackendError));

      const booksEpicFactoryInstance = booksEpicFactory(booksService);
      const action$ = of(actions.getBooksAsync.request(requestPayloadData));

      booksEpicFactoryInstance(new ActionsObservable(action$), mockState, null).subscribe(res => {
        expect(res).toEqual(actions.getBooksAsync.failure(mockedBackendError.message));

        done();
      });
    });
  });
});
