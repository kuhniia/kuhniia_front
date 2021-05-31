import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  root: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttons: {
    alignSelf: 'center',
  },
});
