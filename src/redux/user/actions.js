import { TYPES } from './constants';

export const signUpInit = (userInputData) => ({
  type: TYPES.SIGN_UP_INIT,
  payload: userInputData,
});

export const signUpSucceed = (payload) => ({
  type: TYPES.SIGN_UP_SUCCEEDED,
  payload,
});

export const signUpFailed = (payload) => ({
  type: TYPES.SIGN_UP_FAILED,
  payload,
});
