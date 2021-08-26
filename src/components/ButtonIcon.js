import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import uiConstants from '../constants/UiConstants';
import R from 'resources/R';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

const ButtonIcon = (props) => {
  const {style, onPress, color, icon} = props;
  let TouchableCmp = TouchableOpacity;

  if (uiConstants.isAndroid && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp style={{...styles.container, ...style}} onPress={onPress}>
      <FontAwesomeIcon icon={icon} color={color} />
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  container: {
    ...R.styles.icon,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ButtonIcon.prototype = {
  icon: PropTypes.any,
  onPress: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.strings,
};

ButtonIcon.defaultProps = {
  icon: faCircle,
  color: R.colors.primary,
};

export default ButtonIcon;
