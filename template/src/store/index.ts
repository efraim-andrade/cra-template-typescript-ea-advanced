import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store, compose } from 'redux';

import rootSagas from './modules/rootSagas';
import rootReducer from './modules/rootReducer';
import { PeopleState } from './modules/people/types';
import persistedReducer from './persistReducers';

declare global {
  interface Console {
    tron: any;
  }
}

export interface ApplicationState {
  people: PeopleState;
}

const sagaMiddleware = createSagaMiddleware();

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(sagaMiddleware), console.tron.createEnhancer())
    : compose(applyMiddleware(sagaMiddleware));

const store: Store<ApplicationState> = createStore(
  persistedReducer(rootReducer),
  composer
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
