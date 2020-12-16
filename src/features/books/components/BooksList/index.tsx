import { Book } from 'features/books/models';

interface BooksListProps {
  books: Book[];
}

export const BooksList: React.FC<BooksListProps> = ({ books }) => (
  <main>
    {books.map(book => (
      <div key={book.id}>
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.description}</p>
      </div>
    ))}
  </main>
);
