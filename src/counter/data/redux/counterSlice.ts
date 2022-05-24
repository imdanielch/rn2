import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CounterStore } from '../../domain/model/counterStore';
import type { Counter } from '../../domain/model/counterEntity';

type CounterStoreState = Omit<
  CounterStore,
  'loadInitialCounter' | 'setCounter' | 'updateCounter'
>;

const initialState: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false,
  isError: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<Counter>) => {
      state.counter = action.payload;
    },
    getCounter: (state) => {
      state.isLoading = true;
    },
    getCounterSuccess: (state, action: PayloadAction<Counter>) => {
      state.isLoading = false;
      state.counter = action.payload;
    },
    updateCounter: (state) => {
      state.isUpdating = true;
    },
    updateCounterSuccess: (state) => {
      state.isUpdating = false;
    },
  },
});

export const {
  setCounter,
  getCounter,
  getCounterSuccess,
  updateCounter,
  updateCounterSuccess,
} = counterSlice.actions;

export type { CounterStoreState };
export default counterSlice.reducer;
