import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import { ButtonFilled, Spacer } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';

import styles from './styles';

const UI = ({ selectSignUpPage = () => {}, selectLogInPage = () => {} }) => {
  return (
    <View style={styles.root}>
      <ImageBackground source={assets.logo} style={styles.imageBackground} />
      <View style={styles.buttons}>
        <ButtonFilled label={texts.signUp} filled onPress={selectSignUpPage} />
        <Spacer size={25} />
        <ButtonFilled label={texts.logIn} onPress={selectLogInPage} />
      </View>
      <Spacer size={50} />
    </View>
  );
};

UI.propTypes = {
  selectSignUpPage: PropTypes.func,
  selectLogInPage: PropTypes.func,
};

export default UI;
