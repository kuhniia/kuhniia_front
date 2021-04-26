import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import { fonts, fontsSizes } from 'src/constants/fonts';
import { Typography } from 'src/components/_shared/index';

const ScreenTitle = ({ title= '' }) =>
  <View style={styles.root}>
    <Typography font={fonts.robotoRegular} size={fontsSizes.H24}>
      {title}
    </Typography>
  </View>


export default ScreenTitle;
