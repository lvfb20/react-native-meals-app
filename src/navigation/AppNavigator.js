import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.user.user);

  return (
    <NavigationContainer>
      {isAuth ? <RootStackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
