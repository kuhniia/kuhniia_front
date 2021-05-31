import { View, ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import { ButtonFilled, Spacer } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';

const PreloadPage = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={assets.logo} style={styles.imageBackground} />
      <View style={styles.buttons}>
        <ButtonFilled label={texts.signUp} filled onPress={() => navigation.navigate('SignUpPage')} />
        <Spacer size={25} />
        <ButtonFilled label={texts.logIn} onPress={() => navigation.navigate('LogInPage')} />
      </View>
      <Spacer size={50} />
    </View>
  );
};

export default PreloadPage;
