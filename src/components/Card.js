import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import R from 'resources/R';

const Card = ({ children, style }) => {
  const containerStyles = [styles.card];

  if (style) {
    containerStyles.push(style);
  }

  return <View style={containerStyles}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.any,
};

Card.defaultProps = {
  children: null,
  style: null,
};

const styles = StyleSheet.create({
  card: {
    ...R.styles.shadow,
    ...{
      shadowRadius: 8,
      elevation: 4,
      backgroundColor: R.colors.white,
    },
  },
});

export default Card;
