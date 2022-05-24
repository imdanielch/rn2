import type { Counter } from '../../domain/model/counterEntity';
import { getCounterAPI, updateCounterAPI } from '../webAPI/counterService';

import {
  setCounter,
  getCounter,
  getCounterSuccess,
  updateCounter,
  updateCounterSuccess,
} from './counterSlice';

const setCounterAction = (counter: Counter) => (dispatch: any) =>
  dispatch(setCounter(counter));
// example with async/await
const getCounterAction = () => async (dispatch: any) => {
  dispatch(getCounter());
  const newCounter = await getCounterAPI();
  dispatch(getCounterSuccess(newCounter));
  return newCounter;
};
// example with Promises
const updateCounterAction = (counter: Counter) => (dispatch: any) => {
  dispatch(updateCounter());

  return updateCounterAPI(counter).then((count) => {
    dispatch(updateCounterSuccess());

    return count;
  });
};

export { setCounterAction, getCounterAction, updateCounterAction };
