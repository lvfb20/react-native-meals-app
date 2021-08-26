import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ScreenKey from '../constants/ScreenKeys';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import {defaultScreenOptions} from './index';

const CategoriesStackNavigator = createNativeStackNavigator();

const CategoriesNavigator = (props) => {
  return (
    <CategoriesStackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <CategoriesStackNavigator.Screen
        name={ScreenKey.categories}
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories',
        }}></CategoriesStackNavigator.Screen>
      <CategoriesStackNavigator.Screen
        name={ScreenKey.categoryMeals}
        component={CategoryMealsScreen}></CategoriesStackNavigator.Screen>
      <CategoriesStackNavigator.Screen
        name={ScreenKey.mealDetail}
        component={MealDetailScreen}></CategoriesStackNavigator.Screen>
    </CategoriesStackNavigator.Navigator>
  );
};

export default CategoriesNavigator;
