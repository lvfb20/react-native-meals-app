import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import R from 'resources/R';

const ModalInfo = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={R.textStyles.h3}>This is a modal example </Text>
      <TouchableOpacity
        style={{backgroundColor: 'white', padding: 20}}
        onPress={() => navigation.pop()}>
        <Text>Dismiss !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalInfo;
