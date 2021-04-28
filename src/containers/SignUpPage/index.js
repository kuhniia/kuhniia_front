import { Image, ScrollView, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { InputField, Spacer, ButtonFilled } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';
import PAGES from 'src/navigation/constants';

const SignUpPage = ({ navigation }) => {
  return (
    <>
      <ScrollView style={ styles.root }>
        <View style={ styles.form }>
          <Spacer size={ 25 } />
          <Image source={ assets.defaultAvatar } />
          <Spacer size={ 25 } />
          <InputField iconSrc={ assets.userIcon } label={ texts.firstname } />
          <InputField iconSrc={ assets.userIcon } label={ texts.lastname } />
          <InputField iconSrc={ assets.messageIcon } label={ texts.email } />
          <InputField iconSrc={ assets.userIcon } label={ texts.username } />
          <InputField iconSrc={ assets.lockIcon } label={ texts.password } />
          <InputField iconSrc={ assets.lockIcon } label={ texts.confirmPassword } />
        </View>
      </ScrollView>
      <ButtonFilled
        filled
        label={texts.signUp}
        style={styles.button}
        onPress={() => navigation.navigate(PAGES.MainPage)}
      />
    </>
  );
};

export default SignUpPage;
