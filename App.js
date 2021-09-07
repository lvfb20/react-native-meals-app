/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/store';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigator from 'src/navigation/AppNavigator';

const theme = extendTheme({
  components: {
      Button: {
          baseStyle: {},
          defaultProps: {},
          variants: {},
          sizes: {},
      }
  } 
});

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <AppNavigator></AppNavigator>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
