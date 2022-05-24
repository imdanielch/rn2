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
    setCounterAction: (state, action: PayloadAction<Counter>) => {
      state.counter = action.payload;
    },
    getCounterAction: (state) => {
      state.isLoading = true;
    },
    getCounterSuccessAction: (state, action: PayloadAction<Counter>) => {
      state.isLoading = false;
      state.counter = action.payload;
    },
    updateCounterAction: (state) => {
      state.isUpdating = true;
    },
    updateCounterSuccessAction: (state) => {
      state.isUpdating = false;
    },
  },
});

export const {
  setCounterAction,
  getCounterAction,
  getCounterSuccessAction,
  updateCounterAction,
  updateCounterSuccessAction,
} = counterSlice.actions;

export type { CounterStoreState };
export default counterSlice.reducer;
