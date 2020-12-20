export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: BookInfo;
}

export interface BookInfo {
  title: string;
  authors?: string[];
  description: string;
  imageLinks?: ImageLinks;
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
}

export interface ImageLinks {
  thumbnail?: string;
  medium?: string;
  large?: string;
}
