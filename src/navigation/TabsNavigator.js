import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CategoriesNavigator from './CategoriesNavigator';
import ProfileScreen from '../screens/ProfileScreen';

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faThLarge} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';

import R from 'resources/R';
import ScreenKey from '../constants/ScreenKeys';

const BottomTabsNavigator = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabsNavigator.Navigator
      tabBarOptions={{
        activeTintColor: R.colors.primary,
        inactiveTintColor: R.colors.lightGrey,
      }}>
      <BottomTabsNavigator.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faThLarge}
              color={focused ? R.colors.primary : R.colors.lightGrey}
            />
          ),
          tabBarLabel: 'Categories'
        }}
        name={ScreenKey.categoriesNavigator}
        component={CategoriesNavigator}></BottomTabsNavigator.Screen>
      <BottomTabsNavigator.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faUser}
              color={focused ? R.colors.primary : R.colors.lightGrey}
            />
          ),
          tabBarLabel: 'Profile'
        }}
        name={ScreenKey.profile}
        component={ProfileScreen}></BottomTabsNavigator.Screen>
    </BottomTabsNavigator.Navigator>
  );
};

export default TabsNavigator;
