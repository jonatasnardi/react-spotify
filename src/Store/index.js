import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './Ducks';

const createAppropriateStore = createStore;

const persistConfig = {
  key: 'testxp',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createAppropriateStore(
  persistedReducer,
);

const persistor = persistStore(store);

export { store, persistor };