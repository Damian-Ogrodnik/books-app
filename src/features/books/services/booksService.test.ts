import { of } from 'rxjs';

import { HttpService } from 'common/services/httpService';
import { mockedWrongRequestError } from 'common/mocks/Error';

import { BooksService } from './booksService';
import {
  booksMock,
  requestPayloadData,
  BOOKS_ON_REQUEST,
  emptyPayloadData,
} from '../mocks/booksMocks';

describe('Books service', () => {
  const httpServiceMock = HttpService as jest.Mock<HttpService>;
  let httpService: HttpService;

  beforeEach(() => {
    httpService = new httpServiceMock();
  });

  describe('getBooks service', () => {
    it('should fetch books', done => {
      jest.spyOn(httpService, 'GET').mockImplementation(() => of(booksMock));

      const booksService = new BooksService(httpService, BOOKS_ON_REQUEST);
      booksService.getBooks(requestPayloadData).subscribe(res => {
        expect(res).toMatchObject(booksMock);

        done();
      });
    });

    it('should return error for empty request', done => {
      jest.spyOn(httpService, 'GET').mockImplementation(() => of(mockedWrongRequestError));

      const booksService = new BooksService(httpService, BOOKS_ON_REQUEST);
      booksService.getBooks(emptyPayloadData).subscribe(res => {
        expect(res).toMatchObject(mockedWrongRequestError);

        done();
      });
    });
  });
});
