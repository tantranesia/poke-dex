import appReducer from '../reducer/rootReducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware = applyMiddleware(reduxThunk);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { persistor, store };
