import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import uiConstants from '../constants/UiConstants';
import R from 'resources/R';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{true: R.colors.primary}}
        thumbColor={uiConstants.isAndroid ? R.colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  label: {
    ...R.textStyles.bodyRegular,
    color: R.colors.secondaryText,
  }
});
export default FilterSwitch;
