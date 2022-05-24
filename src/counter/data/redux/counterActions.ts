import type { Counter } from '../../domain/model/counterEntity';
import { getCounterAPI, updateCounterAPI } from '../webAPI/counterService';

import {
  setCounter,
  getCounter,
  getCounterSuccess,
  updateCounter,
  updateCounterSuccess,
} from './counterSlice';

// higher order functions
// Equivalent to:
// const setCounterAction = function(counter) {
//  return (function (dispatch) {
//    return dispatch(setCounterAction(counter));
//  });
// };
const setCounterAction = (counter: Counter) => (dispatch: any) =>
  dispatch(setCounter(counter));

const getCounterAction = () => async (dispatch: any) => {
  dispatch(getCounter());
  const newCounter = await getCounterAPI();
  dispatch(getCounterSuccess(newCounter));
  return newCounter;
};

const updateCounterAction = (counter: Counter) => (dispatch: any) => {
  dispatch(updateCounter());

  return updateCounterAPI(counter).then((count) => {
    dispatch(updateCounterSuccess());

    return count;
  });
};

export { setCounterAction, getCounterAction, updateCounterAction };
