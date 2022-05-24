import React from 'react';
import { Provider } from 'react-redux';
import CounterView from '../../../counter/presentation/view/CounterView';

import { appStoreImplementation } from '../../data/redux/appStoreImplementation';

function AppView() {
  return (
    <Provider store={appStoreImplementation}>
      <CounterView />
    </Provider>
  );
}

export default AppView;
