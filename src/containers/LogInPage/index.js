import { View, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { ButtonFilled, InputField, Spacer } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';

const LogInPage = () => {
  return (
    <ScrollView style={ styles.root }>
      <View style={ styles.form }>
        <Spacer size={ 25 } />
        <InputField iconSrc={ assets.userIcon } label={ texts.username } />
        <InputField iconSrc={ assets.lockIcon } label={ texts.password } />
        <ButtonFilled filled label={texts.logIn} />
      </View>
    </ScrollView>
  );
};

export default LogInPage;
