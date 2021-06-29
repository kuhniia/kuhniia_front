import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UI from 'src/components/SignUpPage';
import { signUpInit } from 'src/redux/user/actions';
import { selectIsUserLoading, selectIsUserCreationError } from 'src/redux/user/selectors';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsUserLoading);
  const error = useSelector(selectIsUserCreationError);

  const onSignUpPress = (userInputData, passwordConfirm) => dispatch(signUpInit(userInputData, passwordConfirm));

  return <UI onSignUpPress={onSignUpPress} isLoading={isLoading} error={error} />;
};

export default SignUpPage;
