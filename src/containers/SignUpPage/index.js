import { Image, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { InputField, Spacer, ButtonFilled } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';

const SignUpPage = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const userInputData = {
    firstName,
    lastName,
    email,
    username,
    password,
  };

  const register = async (user) => {
    console.log(JSON.stringify(user));
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.error(e);
    }
  };

  const onSignUpPress = () => {
    register(userInputData);
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.form}>
        <Spacer size={25} />
        <Image source={assets.defaultAvatar} />
        <Spacer size={25} />
        <InputField iconSrc={assets.userIcon} label={texts.firstname} value={firstName} setValue={setFirstname} />
        <InputField iconSrc={assets.userIcon} label={texts.lastname} value={lastName} setValue={setLastname} />
        <InputField iconSrc={assets.messageIcon} label={texts.email} value={email} setValue={setEmail} />
        <InputField iconSrc={assets.userIcon} label={texts.username} value={username} setValue={setUsername} />
        <InputField
          iconSrc={assets.lockIcon}
          label={texts.password}
          type="password"
          value={password}
          setValue={setPassword}
        />
        <InputField
          iconSrc={assets.lockIcon}
          label={texts.confirmPassword}
          type="password"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
        <Spacer size={60} />
        {firstName && lastName && email && username && password ? (
          <ButtonFilled filled label={texts.signUp} style={styles.button} onPress={onSignUpPress} />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default SignUpPage;
