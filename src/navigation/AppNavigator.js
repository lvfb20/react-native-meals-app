import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesNavigator, SideNavigator } from './CategoriesNavigator';

const AppNavigator = props => {
  return(
    <NavigationContainer>
      <SideNavigator/>
    </NavigationContainer>
  );
}

export default AppNavigator;