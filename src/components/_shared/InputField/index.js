import React from 'react';
import { TextInput, View, Image } from 'react-native';
import styles from './styles';
import { Typography, Spacer } from 'src/components/_shared';
import { fonts, fontsSizes } from 'src/constants/fonts';
import colors from 'src/constants/colors';

const InputField = ({ iconSrc, label = '' }) => (
  <View style={ styles.root }>
    <View style={ styles.inputHeader }>
      <Image source={ iconSrc } style={ styles.inputHeaderIcon } />
      <Typography font={ fonts.robotoRegular } size={ fontsSizes.H11 } color={ colors.limedAsh } letterSpacing>
        { label }
      </Typography>
    </View>
    <Spacer size={10}/>
    <TextInput style={ styles.input } />
  </View>);

export default InputField;
