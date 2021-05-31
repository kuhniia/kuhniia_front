import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  root: {
    padding: 20,
    width: 355,
    height: 215,
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 10,
    backgroundColor: colors.doveGray,
  },
  avatar: {
    height: 55,
  },
});
