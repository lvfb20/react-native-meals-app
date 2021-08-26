import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {applyFilters} from '../store';
import FilterSwitch from '../components/FilterSwitch';
import ButtonIcon from '../components/ButtonIcon';
import {faBars, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import R from 'resources/R';

const FiltersScreen = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFiltersHandler = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(applyFilters(appliedFilters));
  };

  //Set navigation options
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon  icon={faBars} onPress={() => {
          navigation.toggleDrawer();
        }}></ButtonIcon>
      ),
      headerRight: () => (
        <ButtonIcon  icon={faInfoCircle} onPress={() => {
          navigation.navigate('ModalInfo');
        }}></ButtonIcon>
      ),
   
    });
  }, [navigation]);

  //Save Filters
  useEffect(() => {
    saveFiltersHandler();
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...R.textStyles.h2,
    margin: 20,
    textAlign: 'center',
    color: R.colors.accent,
  },
});

export default FiltersScreen;
