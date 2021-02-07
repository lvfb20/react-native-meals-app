import React from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import ScreenKey from '../constants/screenKeys';
import uiConstants from '../constants/uiConstants';
import R from 'resources/R';

//Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const CategoriesStackNavigator = createStackNavigator();
const FiltersStackNavigator = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: uiConstants.isAndroid ? R.colors.primary : '',
  },
  headerTintColor: uiConstants.isAndroid ? 'white' : R.colors.primary,
  headerTitle: '',
};

export const CategoriesNavigator = (props) => {
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

export const FiltersNavigator = (props) => {
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


export const SideNavigator = (props) => {
    return (
        <DrawerNavigator.Navigator       
        drawerContent={props => {
            return (
              <View style={{ flex: 1, paddingTop: 20 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                  <DrawerItemList {...props} />
                </SafeAreaView>
              </View>
            );
          }}
          drawerContentOptions={{
            activeTintColor: R.colors.primary,
            inactiveTintColor: R.colors.secondaryText
            
          }}>
              <DrawerNavigator.Screen 
            name={'Categories'}
            component={CategoriesNavigator}
            options={{
                drawerIcon: props => (
                  <Text>-</Text>
                )
              }}
            ></DrawerNavigator.Screen>
            <DrawerNavigator.Screen 
            name={'Filters'}
            component={FiltersNavigator}
            options={{
                drawerIcon: props => (
                  <Text>-</Text>
                )
              }}
            ></DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    )
}
