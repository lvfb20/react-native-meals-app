import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ScreenKey from '../constants/ScreenKeys';
import {defaultScreenOptions} from './index';
import FiltersScreen from '../screens/FiltersScreen';

const FiltersStackNavigator = createNativeStackNavigator();

const FiltersNavigator = (props) => {
  return (
    <FiltersStackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <FiltersStackNavigator.Screen
        name={ScreenKey.filters}
        component={FiltersScreen}
        options={{
          headerTitle: 'Filters',
        }}></FiltersStackNavigator.Screen>
    </FiltersStackNavigator.Navigator>
  );
};

export default FiltersNavigator;
