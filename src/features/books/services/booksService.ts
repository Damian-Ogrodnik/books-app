import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { BooksData } from '../models';

export class BooksService {
  constructor(private readonly httpService: HttpService, private readonly booksOnRequest: number) {}

  getBooks(searchPhrase: string, nextBookIndex = 1) {
    return this.httpService
      .GET<BooksData>(`${apiEndpoints.books}?q=${searchPhrase}&startIndex=${nextBookIndex}`)
      .pipe(map(data => data));
  }
}
