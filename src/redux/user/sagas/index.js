import { takeLatest } from 'redux-saga/effects';
import { TYPES } from 'src/redux/user/constants';
import signUpSaga from 'src/redux/user/sagas/signUpSaga';
import logInSaga from 'src/redux/user/sagas/logInSaga';

export default function* userSaga() {
  yield takeLatest(TYPES.SIGN_UP_INIT, signUpSaga);
  yield takeLatest(TYPES.LOG_IN_INIT, logInSaga);
}
