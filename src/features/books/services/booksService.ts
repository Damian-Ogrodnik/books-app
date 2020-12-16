import { map } from 'rxjs/operators';

import { apiEndpoints } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';

export class BooksService {
  constructor(private readonly httpService: HttpService) {}

  getBooks(data?: any) {
    return this.httpService.GET<any>(`${apiEndpoints.books}?q=flowers`).pipe(map(data => data));
  }
}
