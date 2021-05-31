import { ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { Typography, KitchenComponent, Spacer } from 'src/components/_shared';
import { texts } from 'src/translations';
import { fonts, fontsSizes } from 'src/constants/fonts';

const MainPage = () => {
  return (
    <ScrollView style={styles.root}>
      <Typography font={fonts.robotoRegular} size={fontsSizes.H24}>
        {texts.yourCookingSpaces}
      </Typography>
      <Spacer size={20} />
      <KitchenComponent spaceName={'Family Space'} />
      <Spacer size={15} />
      <KitchenComponent spaceName={'Family Space'} />
      <Spacer size={15} />
      <KitchenComponent spaceName={'Family Space'} />
      <Spacer size={15} />
      <KitchenComponent spaceName={'Family Space'} />
    </ScrollView>
  );
};

export default MainPage;
