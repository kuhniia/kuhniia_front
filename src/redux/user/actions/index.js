import { TYPES } from 'src/redux/user/constants';

export const signUpInit = (userInputData, passwordConfirm) => ({
  type: TYPES.SIGN_UP_INIT,
  payload: { userInputData, passwordConfirm },
});

export const signUpSucceed = (payload) => ({
  type: TYPES.SIGN_UP_SUCCEED,
  payload,
});

export const signUpFailed = (payload) => ({
  type: TYPES.SIGN_UP_FAILED,
  payload,
});

export const cleanUpUserData = () => ({
  type: TYPES.CLEAN_UP_USER_DATA,
});
