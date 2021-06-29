import { takeLatest } from 'redux-saga/effects';
import { TYPES } from 'src/redux/user/constants';
import signUpSaga from './signUpSaga';

export default function* userSaga() {
  yield takeLatest(TYPES.SIGN_UP_INIT, signUpSaga);
}
