/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// necessary for setTimeout() in /src/app/counter/data/counterService.ts
// probably removed once we implement web API.
jest.useFakeTimers();

it('renders correctly', () => {
  renderer.create(<App />);
});
