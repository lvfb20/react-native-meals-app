import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Card from './Card';
import uiConstants from '../constants/UiConstants';
import R from 'resources/R';

const CategoryGridItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (uiConstants.isAndroid && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
      <Card style={{...styles.gridItem, backgroundColor: props.color}}>
         <TouchableCmp style={styles.container} onPress={props.onSelect}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
        </TouchableCmp>
      </Card>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: uiConstants.isAndroid && Platform.Version >= 21 ? 'hidden' : 'visible',
    padding: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    ...R.textStyles.h3
  },
});

export default CategoryGridItem;
