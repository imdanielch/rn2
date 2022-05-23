import React, { useEffect } from 'react';

import { View, Button, Text, StyleSheet } from 'react-native';
import Spinner from '../../../shared/ui/Spinner';

import { useCounterViewModel } from '../viewModel/counterViewModel';
import { useCounterStoreImplementation } from '../../data/redux/counterStoreImplementation';

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    width: 40,
    flexDirection: 'row',
  },
});

const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    canDecrement,
    isLoading,
    isError,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterViewModel(store);

  useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <View>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Text>Failed to load</Text>
      ) : (
        <>
          <Button
            title="dec"
            onPress={decrementCounter}
            disabled={!canDecrement}
          />
          <Text style={styles.button}>{count}</Text>
          <Button title="inc" onPress={incrementCounter} />
        </>
      )}
    </View>
  );
};

export default CounterView;
