export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: BookInfo;
  saleInfo?: {
    buyLink?: string;
  };
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

export interface SelectedBookData extends BookInfo {
  saleInfo?: {
    buyLink?: string;
  };
}
