import React, { useState } from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Typography, Spacer } from 'src/components/_shared';
import { fonts, fontsSizes } from 'src/constants/fonts';
import colors from 'src/constants/colors';
import assets from 'src/assets';

import styles from './styles';

const InputField = ({ iconSrc, label = '', value = '', setValue, readOnly = false, type, error }) => {
  const isSecure = type === 'password';
  const uppercase = type === 'password' || type === 'email' || type === 'username' ? 'none' : 'sentences';

  const [secure, setSecure] = useState(isSecure);

  return (
    <>
      <View style={[styles.root, error ? styles.error : styles.active]}>
        <View style={styles.inputHeader}>
          <Image source={iconSrc} style={styles.inputHeaderIcon} />
          <Typography
            font={fonts.robotoRegular}
            size={fontsSizes.H11}
            color={error ? colors.error : colors.limedAsh}
            letterSpacing>
            {label}
          </Typography>
        </View>
        <Spacer size={10} />
        <View style={styles.inputBody}>
          <TextInput
            style={styles.input}
            value={value}
            editable={!readOnly}
            onChangeText={setValue}
            secureTextEntry={secure}
            autoCapitalize={uppercase}
          />
          {type === 'password' ? (
            <TouchableOpacity style={styles.eye} onPress={() => setSecure(!secure)}>
              <Image source={secure ? assets.eyeClosed : assets.eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {error && (
        <View style={styles.bottomError}>
          <Typography font={fonts.robotoRegular} size={fontsSizes.H11} color={colors.error} letterSpacing>
            {error?.message}
          </Typography>
        </View>
      )}
    </>
  );
};

export default InputField;
