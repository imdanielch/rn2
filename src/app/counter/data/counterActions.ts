import type { Counter } from '../domain/counterEntity';
import { getCounter, updateCounter } from './counterService';
//import * as actionTypes from './counterActionTypes';
import {
  setCounterActionC,
  getCounterActionC,
  getCounterSuccessActionC,
  updateCounterActionC,
  updateCounterSuccessActionC,
} from './counterReducer';

const setCounterAction = (counter: Counter) => (dispatch: any) =>
  dispatch(setCounterActionC(counter));

const getCounterAction = () => (dispatch: any) => {
  dispatch(getCounterActionC());

  return getCounter().then((counter) => {
    dispatch(getCounterSuccessActionC(counter));

    return counter;
  });
};

const updateCounterAction = (counter: Counter) => (dispatch: any) => {
  dispatch(updateCounterActionC());

  return updateCounter(counter).then((count) => {
    dispatch(updateCounterSuccessActionC());

    return count;
  });
};

export { setCounterAction, getCounterAction, updateCounterAction };
