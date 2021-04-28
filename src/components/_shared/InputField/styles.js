import { StyleSheet, Dimensions } from 'react-native';
import colors from 'src/constants/colors';

const INPUT_WIDTH = Dimensions.get("screen").width * 0.85;
const INPUT_HEIGHT = 50;
const BOTTOM_WEIGHT = 1.5;

export default StyleSheet.create({
  root: {
    width: INPUT_WIDTH,
    height: INPUT_HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomColor: colors.limedAsh,
    borderBottomWidth: BOTTOM_WEIGHT,
    marginBottom: 30,
    paddingBottom: 10,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputHeaderIcon: {
    marginHorizontal: 5,
  },
  input: {
    height: INPUT_HEIGHT / 2,
    width: INPUT_WIDTH,
    paddingLeft: 5,
  }
});
