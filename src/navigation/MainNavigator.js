import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import {faThLarge} from '@fortawesome/free-solid-svg-icons';

import R from 'resources/R';
import ScreenKeys from '../constants/ScreenKeys';
import FiltersNavigator from './FiltersNavigator';
import TabsNavigator from './TabsNavigator';

const DrawerNavigator = createDrawerNavigator();

const MainNavigator = (props) => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: R.colors.primary,
        inactiveTintColor: R.colors.lightGrey,
        labelStyle: {
          fontFamily: R.fonts.OpenSansBold,
          fontSize: 18,
        },
      }}>
      <DrawerNavigator.Screen
        name={ScreenKeys.tabsNavigator}
        component={TabsNavigator}
        options={{
          drawerLabel: 'Categories',
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faThLarge} color={R.colors.primary} />
          ),
        }}></DrawerNavigator.Screen>
      <DrawerNavigator.Screen
        name={ScreenKeys.filtersNavigator}
        component={FiltersNavigator}
        options={{
          drawerLabel: 'Filters',
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faFilter} color={R.colors.primary} />
          ),
        }}></DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
};

export default MainNavigator;
