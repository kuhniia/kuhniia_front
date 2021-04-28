import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Typography, Spacer } from 'src/components/_shared';
import styles from './styles';
import assets from 'src/assets';
import {fonts, fontsSizes} from 'src/constants/fonts';

const AvatarWithSignature = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Image source={assets.defaultAvatar} resizeMode={'contain'} style={styles.avatar} />
    <Typography font={fonts.robotoRegular} size={fontsSizes.H18}>Nadiia Fomenko</Typography>
  </TouchableOpacity>);

export default AvatarWithSignature;
