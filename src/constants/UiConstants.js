import { Dimensions, Platform } from 'react-native';

const uiConstants = {
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  statusBar: {
    light: 'light',
    dark: 'dark',
  },
};

export default uiConstants;
