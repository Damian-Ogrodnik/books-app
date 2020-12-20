export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: BookInfo;
}

export interface BookInfo {
  title: string;
  authors?: string[];
  description: string;
  imageLinks?: {
    thumbnail: string;
  };
}
