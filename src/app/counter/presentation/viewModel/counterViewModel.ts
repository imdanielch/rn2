import { useCallback } from 'react';

import type { CounterStore } from '../../domain/model/counterStore';
import { getCounterUseCase } from '../../domain/useCases/getCounterUseCase';
import { incrementCounterUseCase } from '../../domain/useCases/incrementCounterUseCase';
import { decrementCounterUseCase } from '../../domain/useCases/decrementCounterUseCase';

function useCounterViewModel(store: CounterStore) {
  const getCounter = useCallback(() => {
    getCounterUseCase({
      loadInitialCounter: store.loadInitialCounter,
    });
  }, [store.loadInitialCounter]);

  const incrementCounter = useCallback(() => {
    incrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
      setCounter: store.setCounter,
    });
  }, [store.counter, store.updateCounter, store.setCounter]);

  const decrementCounter = useCallback(() => {
    decrementCounterUseCase({
      counter: store.counter,
      updateCounter: store.updateCounter,
      setCounter: store.setCounter,
    });
  }, [store.counter, store.updateCounter, store.setCounter]);

  return {
    count: store.counter?.value,
    isLoading: typeof store.counter === 'undefined' || store.isLoading,
    canDecrement: Number(store.counter?.value) > 0,
    isError: typeof store.counter === 'undefined' || store.isError,
    getCounter,
    incrementCounter,
    decrementCounter,
  };
}

export { useCounterViewModel };
