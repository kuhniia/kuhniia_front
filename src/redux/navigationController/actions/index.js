import { LOG_OUT, TYPES } from 'src/redux/navigationController/constants';
import { CANCEL_SIGN_UP } from 'src/redux/navigationController/constants';

// store actions
export const setCurrentPage = (payload) => ({
  type: TYPES.SET_CURRENT_PAGE,
  payload,
});

export const setNavigateBackToPage = (payload) => ({
  type: TYPES.SET_NAVIGATE_BACK_TO_PAGE,
  payload,
});

// navigation actions
export const cancelSignUp = () => ({
  type: CANCEL_SIGN_UP,
});

export const logOut = () => ({
  type: LOG_OUT,
});
