import React from 'react';
import UI from 'src/components/AccountSettingsPage';
import PAGES from 'src/navigation/constants';

const AccountSettingsPage = ({ navigation }) => {
  const selectPreloadPage = () => navigation.navigate(PAGES.PreloadPage);

  return <UI selectPreloadPage={selectPreloadPage} />;
};

export default AccountSettingsPage;
