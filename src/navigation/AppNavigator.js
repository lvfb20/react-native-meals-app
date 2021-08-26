import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CategoriesNavigator,
  SideNavigator,
  RootStackNavigator,
} from './CategoriesNavigator';

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
