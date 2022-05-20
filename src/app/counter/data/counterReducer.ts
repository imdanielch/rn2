import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CounterStore } from '../domain/counterStore';
import type { Counter } from '../domain/counterEntity';
//import * as actionTypes from './counterActionTypes';

type CounterStoreState = Omit<
  CounterStore,
  'loadInitialCounter' | 'setCounter' | 'updateCounter'
>;

const initialState: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounterActionC: (state, action: PayloadAction<Counter>) => {
      state.counter = action.payload;
    },
    getCounterActionC: (state) => {
      state.isLoading = true;
    },
    getCounterSuccessActionC: (state, action: PayloadAction<Counter>) => {
      state.isLoading = false;
      state.counter = action.payload;
    },
    updateCounterActionC: (state) => {
      state.isUpdating = true;
    },
    updateCounterSuccessActionC: (state) => {
      state.isUpdating = false;
    },
  },
});

export const {
  setCounterActionC,
  getCounterActionC,
  getCounterSuccessActionC,
  updateCounterActionC,
  updateCounterSuccessActionC,
} = counterSlice.actions;

export type { CounterStoreState };
export default counterSlice.reducer;
