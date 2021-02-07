/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import AppNavigator from 'src/navigation/AppNavigator';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
     <AppNavigator></AppNavigator>
    </Provider>
  );
};

export default App;
