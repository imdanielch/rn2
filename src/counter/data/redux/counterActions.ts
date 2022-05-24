import type { Counter } from '../../domain/model/counterEntity';
import { getCounter, updateCounter } from '../webAPI/counterService';

import {
  setCounterAction,
  getCounterAction,
  getCounterSuccessAction,
  updateCounterAction,
  updateCounterSuccessAction,
} from './counterSlice';

// higher order functions
// Equivalent to:
// const setCounterActionCreator = function(counter) {
//  return (function (dispatch) {
//    return dispatch(setCounterAction(counter));
//  });
// };
const setCounterActionCreator = (counter: Counter) => (dispatch: any) =>
  dispatch(setCounterAction(counter));

const getCounterActionCreator = () => async (dispatch: any) => {
  dispatch(getCounterAction());
  const newCounter = await getCounter();
  dispatch(getCounterSuccessAction(newCounter));
  return newCounter;
};
//const getCounterActionCreator = () => (dispatch: any) => {
//  dispatch(getCounterAction());
//
//  return getCounter().then((counter) => {
//    dispatch(getCounterSuccessAction(counter));
//
//    return counter;
//  });
//};

const updateCounterActionCreator = (counter: Counter) => (dispatch: any) => {
  dispatch(updateCounterAction());

  return updateCounter(counter).then((count) => {
    dispatch(updateCounterSuccessAction());

    return count;
  });
};

export {
  setCounterActionCreator,
  getCounterActionCreator,
  updateCounterActionCreator,
};
