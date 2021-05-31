import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from 'src/components/_shared';
import { fonts, fontsSizes } from 'src/constants/fonts';
import colors from 'src/constants/colors';

import styles from './styles';

const KitchenComponent = ({ onPress = () => {}, spaceName = '' }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Typography font={fonts.robotoMedium} size={fontsSizes.H24} color={colors.white}>
      {spaceName}
    </Typography>
  </TouchableOpacity>
);

export default KitchenComponent;
