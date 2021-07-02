import React from 'react';
import UI from 'src/components/LogInPage';
import PAGES from 'src/navigation/constants';
import { logInInit } from 'src/redux/user/actions';
import { useDispatch } from 'react-redux';

const LogInPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const onLogInPress = (userInputData) => dispatch(logInInit(userInputData));

  return <UI onLogInPress={onLogInPress} />;
};

export default LogInPage;
