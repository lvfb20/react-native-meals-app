import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Card from './Card';
import uiConstant from '../constants/uiConstants';
import R from 'resources/R';

const CategoryGridItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp style={styles.container} onPress={props.onSelect}>
      <Card style={{...styles.gridItem, backgroundColor: props.color}}>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </Card>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      uiConstant.isAndroid && Platform.Version >= 21 ? 'hidden' : 'visible',
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  container: {
    flex: 1
  },
  title: {
    ...R.textStyles.h3
  },
});

export default CategoryGridItem;
