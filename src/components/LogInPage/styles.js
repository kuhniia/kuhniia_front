import { StyleSheet } from 'react-native';
import { BUTTON_BOTTOM_GAP } from 'src/constants/styleConstants';

export default StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  form: {
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: BUTTON_BOTTOM_GAP,
  },
});
