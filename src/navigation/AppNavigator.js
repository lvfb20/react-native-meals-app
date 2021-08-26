import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootNavigator';

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
