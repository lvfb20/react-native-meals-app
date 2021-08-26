import uiConstants from '../constants/UiConstants';
import R from 'resources/R';

export const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: uiConstants.isAndroid ? R.colors.primary : '',
  },
  //headerLargeTitle: true, //Support Large titles
  headerTintColor: uiConstants.isAndroid ? 'white' : R.colors.primary,
  headerTitle: '',
  headerTitleStyle: {
    fontFamily: R.fonts.OpenSansBold,
    fontSize: 18,
  },
};
