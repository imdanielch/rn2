import React from 'react';

import { View, Button, Text, StyleSheet } from 'react-native';
import Spinner from '../../shared/ui/Spinner';

import { useCounterViewModel } from '../controller/counterViewModel';
import { useCounterStoreImplementation } from '../data/counterStoreImplementation';

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
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <View>
      {isLoading ? (
        <Spinner />
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
