import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { ButtonFilled, InputField, Spacer } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';

import styles from './styles';

const UI = ({ selectMainPage = () => {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <ScrollView style={styles.root}>
        <View style={styles.form}>
          <Spacer size={25} />
          <InputField iconSrc={assets.userIcon} label={texts.username} value={username} setValue={setUsername} />
          <Spacer size={25} />
          <InputField
            iconSrc={assets.lockIcon}
            label={texts.password}
            type="password"
            value={password}
            setValue={setPassword}
          />
        </View>
      </ScrollView>
      <ButtonFilled filled label={texts.logIn} style={styles.button} onPress={selectMainPage} />
    </>
  );
};

UI.propTypes = {
  selectMainPage: PropTypes.func,
};

export default UI;
