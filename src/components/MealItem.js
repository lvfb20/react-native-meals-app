import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Card from './Card';
import uiConstant from '../constants/uiConstants';
import R from 'resources/R';

const MealItem = props => {
  return (
    <Card style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.innerView}>
          <View style={styles.mealRow}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={{...R.textStyles.h3, ...styles.title}} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    overflow: uiConstant.isAndroid && Platform.Version >= 21 ? 'hidden' : 'visible',
  },
  innerView: {
    borderRadius: 10, 
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  titleContainer: {
    backgroundColor: R.colors.opacity,
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    color: 'white',
  }
});

export default MealItem;
