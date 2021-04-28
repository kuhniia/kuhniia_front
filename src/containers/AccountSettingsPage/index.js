import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { InputField, Spacer, Typography} from 'src/components/_shared';
import { texts } from 'src/translations';
import assets from 'src/assets';
import { fonts, fontsSizes } from 'src/constants/fonts';
import PAGES from 'src/navigation/constants';

const AccountSettingsPage = ({ navigation }) => {
  return (
      <ScrollView style={ styles.root }>
        <View style={styles.header}>
          <Image source={ assets.defaultAvatar } style={styles.avatar} />
          <View>
            <Typography font={fonts.robotoRegular} size={fontsSizes.H18}>Nadiia Fomenko</Typography>
            <Typography font={fonts.robotoRegular} size={fontsSizes.H10}>joined 12 March, 2020</Typography>
          </View>
        </View>
        <Spacer size={60} />
        <InputField
          label={texts.email}
          iconSrc={assets.messageIcon}
          value={'nadiya.fomenko@gmail.com'}
          readOnly
        />
        <Spacer size={20} />
        <InputField label={texts.username} iconSrc={assets.userIcon} value={'nadiya_fmnk'} />
        <Spacer size={60} />
        <TouchableOpacity>
          <Typography font={fonts.robotoRegular} size={fontsSizes.H14}>Change password</Typography>
        </TouchableOpacity>
        <Spacer size={30} />
        <TouchableOpacity onPress={() => navigation.navigate(PAGES.PreloadPage)} >
          <Typography font={fonts.robotoRegular} size={fontsSizes.H14}>Log out</Typography>
        </TouchableOpacity>
      </ScrollView>
  );
};

export default AccountSettingsPage;
