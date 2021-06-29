import { Image, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { InputField, Spacer, ButtonFilled } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';
import { ERROR_TYPES } from 'src/constants/errors';

import styles from './styles';

const UI = ({ onSignUpPress = () => {}, isLoading = false, error }) => {
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

  return (
    <>
      <ScrollView style={styles.root}>
        <View style={styles.form}>
          <Spacer size={15} />
          <Image source={assets.defaultAvatar} />
          <Spacer size={15} />
          <InputField
            iconSrc={assets.userIcon}
            label={texts.firstname}
            value={firstName}
            setValue={setFirstname}
            error={error?.type === 'null' ? error : null}
          />
          <InputField
            iconSrc={assets.userIcon}
            label={texts.lastname}
            value={lastName}
            setValue={setLastname}
            error={error?.type === 'null' ? error : null}
          />
          <InputField
            iconSrc={assets.messageIcon}
            label={texts.email}
            value={email}
            setValue={setEmail}
            type="email"
            error={error?.type === ERROR_TYPES.EMAIL_DO_NOT_MATCH_REGEX ? error : null}
          />
          <InputField
            iconSrc={assets.userIcon}
            label={texts.username}
            value={username}
            setValue={setUsername}
            type="username"
            error={error?.type === ERROR_TYPES.USERNAME_DO_NOT_MATCH_REGEX ? error : null}
          />
          <InputField
            iconSrc={assets.lockIcon}
            label={texts.password}
            type="password"
            value={password}
            setValue={setPassword}
            error={error?.type === ERROR_TYPES.PASSWORD_DO_NOT_MATCH_REGEX ? error : null}
          />
          <InputField
            iconSrc={assets.lockIcon}
            label={texts.confirmPassword}
            type="password"
            value={passwordConfirm}
            setValue={setPasswordConfirm}
            error={error?.type === ERROR_TYPES.PASSWORD_MISMATCH ? error : null}
          />
          <Spacer size={60} />
        </View>
      </ScrollView>
      {firstName && lastName && email && username && password ? (
        <ButtonFilled
          filled
          label={texts.signUp}
          style={styles.button}
          onPress={() => onSignUpPress(userInputData, passwordConfirm)}
          isLoading={isLoading}
        />
      ) : null}
    </>
  );
};

export default UI;
