import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import assets from 'src/assets';

const ButtonBack = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Image source={assets.cancelIcon}  resizeMode={'contain'}  />
  </TouchableOpacity>);

export default ButtonBack;
