import { BASE_URL } from 'config/apiConfig';
import { HttpService } from 'common/services/httpService';
import { BooksService } from 'features/books/services/booksService';

export const httpService = new HttpService(BASE_URL);
export const booksService = new BooksService(httpService);
