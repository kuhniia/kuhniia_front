import React from 'react';
import UI from 'src/components/PreloadPage';
import PAGES from 'src/navigation/constants';

const PreloadPage = ({ navigation }) => {
  const selectSignUpPage = () => navigation.navigate(PAGES.SignUpPage);
  const selectLogInPage = () => navigation.navigate(PAGES.LogInPage);

  return <UI selectSignUpPage={selectSignUpPage} selectLogInPage={selectLogInPage} />;
};

export default PreloadPage;
