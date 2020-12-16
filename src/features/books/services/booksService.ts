import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

import { BooksData } from '../models';

export class BooksService {
  constructor(private readonly httpService: HttpService) {}

  getBooks(searchPhrase: string) {
    return this.httpService
      .GET<BooksData>(`${apiEndpoints.books}?q=${searchPhrase}`)
      .pipe(map(data => data));
  }
}
