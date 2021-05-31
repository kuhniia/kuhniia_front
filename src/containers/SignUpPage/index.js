import React from 'react';
import { useDispatch } from 'react-redux';
import UI from 'src/components/SignUpPage';
import { signUpInit } from 'src/redux/user/actions';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const onSignUpPress = (userInputData) => dispatch(signUpInit(userInputData));

  return <UI onSignUpPress={onSignUpPress} />;
};

export default SignUpPage;
