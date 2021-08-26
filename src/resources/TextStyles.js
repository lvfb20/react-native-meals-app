import colors from './Colors';
import fonts from './Fonts';

const textStyles = {
  h1: {
    fontFamily: fonts.OpenSansBold,
    fontSize: 30,
    color: colors.primaryText,
  },
  h2: {
    fontFamily: fonts.RalewayBold,
    fontSize: 24,
    color: colors.primaryText,
  },
  h3: {
    fontFamily: fonts.RalewayBold,
    fontSize: 20,
    color: colors.primaryText,
    textAlign: 'center',
  },
  bodyBold: {
    fontFamily: fonts.OpenSansBold,
    fontSize: 16,
    color: colors.primaryText,
    textAlign: 'center',
  },
  bodyRegular: {
    fontFamily: fonts.OpenSansRegular,
    fontSize: 16,
    textAlign: 'center',
    color: colors.primaryText,
  },
  subtitleBold: {
    fontFamily: fonts.OpenSansBold,
    fontSize: 12,
    color: colors.secondaryText,
  },
  subtitleRegular: {
    fontFamily: fonts.OpenSansRegular,
    fontSize: 12,
    color: colors.secondaryText,
  },
};

export default textStyles;
