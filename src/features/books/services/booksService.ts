import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { BooksData, NextPagePayload } from '../models';

export class BooksService {
  constructor(private readonly httpService: HttpService, private readonly booksOnRequest: number) {}

  getBooks({ bookTitle, bookAuthor, nextBookIndex }: NextPagePayload) {
    return this.httpService
      .GET<BooksData>(
        `${apiEndpoints.books}?q=
        ${bookTitle && `intitle:${this.transformToProperQuery(bookTitle)}`}
        ${bookAuthor && `+inauthor:${this.transformToProperQuery(bookAuthor)}`}
        ${nextBookIndex && `&startIndex=${nextBookIndex}`}
        ${this.booksOnRequest && `&maxResults=${this.booksOnRequest}`}
        &projection=full
        `.replace(/ /g, ''),
      )
      .pipe(map(data => data));
  }

  transformToProperQuery(str: string) {
    return str.replace(' ', '+');
  }
}
