import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from 'resources/R';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 0,
    marginHorizontal: 20,
    paddingVertical: 5
  },
  text: {
    color: R.colors.secondaryText
  }
});

export default ListItem;
