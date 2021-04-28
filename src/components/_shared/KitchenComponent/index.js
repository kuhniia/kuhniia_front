import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Typography, Spacer } from 'src/components/_shared';
import styles from './styles';
import {fonts, fontsSizes} from 'src/constants/fonts';
import colors from 'src/constants/colors';

const KitchenComponent = ({ onPress = () => {}, spaceName = '' }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Typography font={fonts.robotoMedium} size={fontsSizes.H24} color={colors.white}>
      {spaceName}
    </Typography>
  </TouchableOpacity>);

export default KitchenComponent;
