import { TouchableOpacity } from 'react-native';
import React from 'react';
import colors from 'src/constants/colors';
import { fonts, fontsSizes } from 'src/constants/fonts';
import { Typography } from 'src/components/_shared';

import styles from './styles';

const RoundedButton = ({ style, label, filled = false, onPress = () => {} }) => (
  <TouchableOpacity style={[styles.root, style, filled ? styles.filled : styles.transparent]} onPress={onPress}>
    <Typography color={filled ? colors.white : colors.limedAsh} font={fonts.robotoRegular} size={fontsSizes.H16}>
      {label}
    </Typography>
  </TouchableOpacity>
);

export default RoundedButton;
