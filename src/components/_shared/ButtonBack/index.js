import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const cancelIcon = require('src/assets/cancel/cancel.png');

const ButtonBack = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.root}>
    <Image source={cancelIcon}  resizeMode={'contain'}  />
  </TouchableOpacity>);

export default ButtonBack;
