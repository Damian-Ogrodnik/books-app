import { ActionType } from 'typesafe-actions';

import * as booksActions from 'features/books/actions/booksActions';

const rootAction = {
  books: booksActions,
};

export type AppAction = ActionType<typeof rootAction>;
