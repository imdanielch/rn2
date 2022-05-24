import type { Counter } from '../../domain/model/counterEntity';
import { create } from '../../domain/model/counterModel';

let count = 0;

function getCounter(): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(create(count));
    }, 2000);
  });
}

function updateCounter(counter: Counter): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      count = counter.value;
      resolve(create(count));
    }, 2000);
  });
}

export { getCounter, updateCounter };
