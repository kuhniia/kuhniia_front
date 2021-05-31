import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Typography } from 'src/components/_shared';
import assets from 'src/assets';
import { fonts, fontsSizes } from 'src/constants/fonts';

import styles from './styles';

const mock = {
  name: 'Nadiia Fomenko',
};

const AvatarWithSignature = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Image source={assets.defaultAvatar} resizeMode={'contain'} style={styles.avatar} />
    <Typography font={fonts.robotoRegular} size={fontsSizes.H18}>
      {mock.name}
    </Typography>
  </TouchableOpacity>
);

export default AvatarWithSignature;
