import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import R from 'resources/R';

const ButtonForm = ({title, onPress, style, disabled}) => {
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      style={{...styles.button, ...style}}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: R.colors.primary,
  },
});

ButtonForm.prototype = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

ButtonForm.defaultProps = {
  title: 'Button',
  disabled: false,
};

export default ButtonForm;
