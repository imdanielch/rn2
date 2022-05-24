import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppRootState } from '../../../main/data/redux/appStoreImplementation';
import type { CounterStore } from '../../domain/model/counterStore';
import type { Counter } from '../../domain/model/counterEntity';

import type { CounterStoreState } from './counterSlice';
import {
  getCounterActionCreator,
  setCounterActionCreator,
  updateCounterActionCreator,
} from './counterActions';

const counterSelector = (state: AppRootState) => state.counter;

const useCounterStoreImplementation = (): CounterStore => {
  const { counter, isLoading, isUpdating, isError } = useSelector<
    AppRootState,
    CounterStoreState
  >(counterSelector);
  const dispatch = useDispatch();

  const setCounter = useCallback(
    (count: Counter) => setCounterActionCreator(count)(dispatch),
    [dispatch],
  );

  const loadInitialCounter = useCallback(
    () => getCounterActionCreator()(dispatch),
    [dispatch],
  );

  const updateCounter = useCallback(
    (count: Counter) => updateCounterActionCreator(count)(dispatch),
    [dispatch],
  );

  return {
    counter,
    isLoading,
    isUpdating,
    isError,
    setCounter,
    loadInitialCounter,
    updateCounter,
  };
};

export { useCounterStoreImplementation };
