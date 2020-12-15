import { combineEpics } from 'redux-observable';

import { booksEpicFactory } from 'features/books/epics/booksEpics';

import { booksService } from './rootService';

export const rootEpic = combineEpics(booksEpicFactory(booksService));
