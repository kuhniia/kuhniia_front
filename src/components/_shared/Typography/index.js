import { Text } from 'react-native';
import React from 'react';

import styles from './styles';

const Typography = ({ font, size, children, color, letterSpacing = false }) => {
  return (
    <Text style={[styles[font], styles[size], { color: color }, letterSpacing ? styles.letterSpacing : null]}>
      {children}
    </Text>
  );
};

export default Typography;
