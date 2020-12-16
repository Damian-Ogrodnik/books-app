import { Book } from './Book';

export interface BooksData {
  kind: string;
  totalItems: number;
  items: Book[];
}
