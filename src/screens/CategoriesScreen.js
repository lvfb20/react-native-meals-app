import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, StyleSheet, Button, View, ActivityIndicator, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CategoriesThunks } from '../store';

import ScreenKeys from '../constants/screenKeys';
import R from 'resources/R';

import CategoryGridItem from '../components/CategoryGridItem';
import ButtonIcon from '../components/ButtonIcon';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const CategoriesScreen = (props) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { categories, error } = useSelector((state) => state.categories);

  //Set navigation menu drawer
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon icon={faBars} onPress={() => {
          navigation.toggleDrawer();
        }}></ButtonIcon>
      ),
    });
  }, [navigation]);

  //Load categories
  useEffect(() => {
    setIsLoading(true);
    loadCategories().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCategories]);

  const loadCategories = useCallback(async () => {
    await dispatch(CategoriesThunks.fetchCategories());
  }, [dispatch]);

  //Display error alert
  useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message )
    }
  }, [error]);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridItem
        title={itemData.item.name}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate(ScreenKeys.categoryMeals, {
            category: itemData.item,
          });
        }}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={R.styles.centered}>
        <ActivityIndicator size="large" color={R.colors.primary} />
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
});

export default CategoriesScreen;
