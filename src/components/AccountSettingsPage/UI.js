import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { InputField, Spacer, Typography } from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';
import { fonts, fontsSizes } from 'src/constants/fonts';

import styles from './styles';

const mock = {
  name: 'Nadiia Fomenko',
  date: 'joined 12 March, 2020',
  email: 'nadiya.fomenko@gmail.com',
  nickName: 'nadiya_fmnk',
};

const UI = ({ selectPreloadPage = () => {} }) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <Image source={assets.defaultAvatar} style={styles.avatar} />
        <View>
          <Typography font={fonts.robotoRegular} size={fontsSizes.H18}>
            {mock.name}
          </Typography>
          <Typography font={fonts.robotoRegular} size={fontsSizes.H10}>
            {mock.date}
          </Typography>
        </View>
      </View>
      <Spacer size={60} />
      <InputField label={texts.email} iconSrc={assets.messageIcon} value={mock.email} readOnly />
      <Spacer size={20} />
      <InputField label={texts.username} iconSrc={assets.userIcon} value={mock.nickName} />
      <Spacer size={60} />
      <TouchableOpacity>
        <Typography font={fonts.robotoRegular} size={fontsSizes.H14}>
          {texts.changePassword}
        </Typography>
      </TouchableOpacity>
      <Spacer size={30} />
      <TouchableOpacity onPress={selectPreloadPage}>
        <Typography font={fonts.robotoRegular} size={fontsSizes.H14}>
          {texts.logOut}
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  );
};

UI.propTypes = {
  selectPreloadPage: PropTypes.func,
};

export default UI;
