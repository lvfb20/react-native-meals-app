import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Input, Button} from 'native-base';
import R from 'resources/R';

const InputForm = ({type, isSecure, placeholder, value, onChange, onBlur}) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      type={isSecure ? (show ? 'text' : 'password') : type}
      InputRightElement={
        isSecure && (
          <Button
            style={styles.secureButton}
            _text={styles.secureButtonText}
            ml={1}
            roundedLeft={0}
            roundedRight="md"
            onPress={() => {
              setShow(!show);
            }}>
            {show ? 'Hide' : 'Show'}
          </Button>
        )
      }
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  secureButton: {
    backgroundColor: 'transparent',
    color: 'red',
  },
  secureButtonText: {
    color: R.colors.primary,
    fontSize: 12,
  },
});

InputForm.prototype = {
  isSecure: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputForm.defaultProps = {
  isSecure: false,
  placeholder: '',
  type: 'text',
};

export default InputForm;
