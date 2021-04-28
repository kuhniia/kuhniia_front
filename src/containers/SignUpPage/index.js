import { Image, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { InputField, Spacer, ButtonFilled } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';
import PAGES from 'src/navigation/constants';

const SignUpPage = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
      <ScrollView style={ styles.root }>
        <View style={ styles.form }>
          <Spacer size={ 25 } />
          <Image source={ assets.defaultAvatar } />
          <Spacer size={ 25 } />
          <InputField
            iconSrc={ assets.userIcon }
            label={ texts.firstname }
            value={firstname}
            setValue={setFirstname}
          />
          <InputField
            iconSrc={ assets.userIcon }
            label={ texts.lastname }
            value={lastname}
            setValue={setLastname}
          />
          <InputField
            iconSrc={ assets.messageIcon }
            label={ texts.email }
            value={email}
            setValue={setEmail}
          />
          <InputField
            iconSrc={ assets.userIcon }
            label={ texts.username }
            value={username}
            setValue={setUsername}
          />
          <InputField
            iconSrc={ assets.lockIcon }
            label={ texts.password }
            type="password"
            value={password}
            setValue={setPassword}
          />
          <InputField
            iconSrc={ assets.lockIcon }
            label={ texts.confirmPassword }
            type="password"
            value={passwordConfirm}
            setValue={setPasswordConfirm}
          />
          <Spacer size={ 60 } />
        </View>
        <ButtonFilled
          filled
          label={texts.signUp}
          style={styles.button}
          onPress={() => navigation.navigate(PAGES.MainPage)}
        />
      </ScrollView>
  );
};

export default SignUpPage;
