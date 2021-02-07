import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {MealsThunks} from '../store';

import MealList from '../components/MealList';
import R from 'resources/R';

const CategoryMealsScreen = (props) => {
  const navigation = props.navigation;
  const category = props.route.params ? props.route.params.category : null;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {meals, error} = useSelector((state) => state.meals);

  //Set navigation options
  useEffect(() => {
    navigation.setOptions({
      headerTitle: category.name,
    });
  }, [navigation]);

  //Load meals
  useEffect(() => {
    setIsLoading(true);
    loadMeals().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadMeals]);

  const loadMeals = useCallback(async () => {
    await dispatch(MealsThunks.fetchMeals(category.id));
  }, [dispatch]);

  //Display error alert
  useEffect(() => {
    if (error) {
      Alert.alert('Error', error.message);
    }
  }, [error]);

  if (isLoading) {
    return (
      <View style={R.styles.centered}>
        <ActivityIndicator size="large" color={R.colors.primary} />
      </View>
    );
  }

  return <MealList listData={meals} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
