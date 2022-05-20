import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../../counter/data/counterReducer';

const rootReducer = {
  counter: counterReducer,
};

const appStoreImplementation = configureStore({
  reducer: rootReducer,
});

type AppRootState = ReturnType<typeof appStoreImplementation.getState>;

export { appStoreImplementation };
export type { AppRootState };
