import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';

import { AppAction } from 'common/models/actionModel';

import { rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';
import { AppState } from 'common/models/appStateModel';

const epicMiddleware = createEpicMiddleware<AppAction, AppAction, AppState>();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
