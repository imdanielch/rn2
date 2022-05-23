import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../../../counter/data/redux/counterSlice';
import { exchangeApi } from '../../../counter/data/redux/webAPI/testService';

const rootReducer = {
  counter: counterReducer,
  [exchangeApi.reducerPath]: exchangeApi.reducer,
};

const appStoreImplementation = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeApi.middleware),
});

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };
