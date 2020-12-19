import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { BooksData, NextPagePayload } from '../models';

export class BooksService {
  constructor(private readonly httpService: HttpService, private readonly booksOnRequest: number) {}

  getBooks({ bookTitle, bookAuthor, bookLanguage, nextBookIndex }: NextPagePayload) {
    return this.httpService
      .GET<BooksData>(
        `${apiEndpoints.books}?q=intitle:${bookTitle}+inauthor:${bookAuthor}&startIndex=${nextBookIndex}&langRestrict=${bookLanguage}&maxResults=${this.booksOnRequest}
        `,
      )
      .pipe(map(data => data));
  }
}
