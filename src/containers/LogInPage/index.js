import React from 'react';
import UI from 'src/components/LogInPage';
import PAGES from 'src/navigation/constants';

const LogInPage = ({ navigation }) => {
  const selectMainPage = () => navigation.navigate(PAGES.MainPage);

  return <UI selectMainPage={selectMainPage} />;
};

export default LogInPage;
