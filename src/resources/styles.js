import colors from './colors';
import R from 'resources/R';

const styles = {
  icon: {
    width: 24,
    height: 24,
  },
  centered: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  shadow: {
    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
};

export default styles;