import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import ListItem from '../components/ListItem';
import R from 'resources/R';

const MealDetailScreen = (props) => {
  const meal = props.route.params ? props.route.params.meal : null;

  return (
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <Text style={styles.subtitle}>Ingredients</Text>
      {meal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    ...R.textStyles.h2,
    color: R.colors.accent,
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  subtitle: {
    ...R.textStyles.h3,
    textAlign: 'left',
    marginHorizontal: 20,
    color: R.colors.primaryText,
  },
});

export default MealDetailScreen;
