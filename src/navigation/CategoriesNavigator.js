import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import ScreenKey from '../constants/screenKeys';
import uiConstants from '../constants/uiConstants';
import R from 'resources/R';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import {faThLarge} from '@fortawesome/free-solid-svg-icons';
//Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import ModalInfo from '../screens/ModalInfo';

enableScreens();
const CategoriesStackNavigator = createNativeStackNavigator();
const FiltersStackNavigator = createNativeStackNavigator();
const DrawerNavigator = createDrawerNavigator();
const RootStack = createStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: uiConstants.isAndroid ? R.colors.primary : '',
  },
  headerTintColor: uiConstants.isAndroid ? 'white' : R.colors.primary,
  headerTitle: '',
  headerTitleStyle: {
    fontFamily: R.fonts.OpenSansBold,
    fontSize: 18,
  },
};

export const CategoriesNavigator = (props) => {
  return (
    <CategoriesStackNavigator.Navigator screenOptions={defaultScreenOptions}>
      <CategoriesStackNavigator.Screen
        name={ScreenKey.categories}
        component={CategoriesScreen}
        options={{
          headerTitle: 'Categories',
          // headerLargeTitle: true,
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
        name={'Categories'}
        component={CategoriesNavigator}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faThLarge} color={R.colors.primary} />
          ),
        }}></DrawerNavigator.Screen>
      <DrawerNavigator.Screen
        name={'Filters'}
        component={FiltersNavigator}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faFilter} color={R.colors.primary} />
          ),
        }}></DrawerNavigator.Screen>
    </DrawerNavigator.Navigator>
  );
};

export const RootStackNavigator = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [user, setUser] = React.useState(null);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(!isLoading);
  //     setUser({});
  //   }, 500);
  // }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}
      mode="modal">
      <RootStack.Screen
        name="SideNavigator"
        component={SideNavigator}
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
