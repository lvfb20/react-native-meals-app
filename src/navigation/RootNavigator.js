import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import MainNavigator from './MainNavigator';
import ModalInfo from '../screens/ModalInfo';

enableScreens();

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}
      mode="modal">
      <RootStack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ModalInfo"
        component={ModalInfo}
        options={{animationEnabled: true}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
