import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  root: {
    width: 300,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  transparent: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.limedAsh,
  },
  filled: {
    backgroundColor: colors.limedAsh,
  },
});
