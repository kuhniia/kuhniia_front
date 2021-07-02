import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UI from 'src/components/SignUpPage';
import { signUpInit } from 'src/redux/user/actions';
import { selectIsUserLoading, selectIsUserError } from 'src/redux/user/selectors';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsUserLoading);
  const error = useSelector(selectIsUserError);

  const onSignUpPress = (userInputData, passwordConfirm) => dispatch(signUpInit(userInputData, passwordConfirm));

  return <UI onSignUpPress={onSignUpPress} isLoading={isLoading} error={error} />;
};

export default SignUpPage;
