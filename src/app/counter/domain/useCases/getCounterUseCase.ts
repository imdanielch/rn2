import type { CounterStore } from '../model/counterStore';

type GetCounterStore = Pick<CounterStore, 'loadInitialCounter'>;

const getCounterUseCase = (store: GetCounterStore) => {
  store.loadInitialCounter();
};

export { getCounterUseCase };
