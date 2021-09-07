import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ScreenKey from '../constants/ScreenKeys';
import {defaultScreenOptions} from './index';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStackNavigator = createNativeStackNavigator();

const AuthNavigator = (props) => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <AuthStackNavigator.Screen
        name={ScreenKey.login}
        component={LoginScreen}
        options={{
          headerTitle: 'Login',
        }}></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen
        name={ScreenKey.register}
        component={RegisterScreen}
        options={{
          headerTitle: 'Register',
        }}></AuthStackNavigator.Screen>
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
