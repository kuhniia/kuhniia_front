import { put } from 'redux-saga/effects';
import { signUpSucceed, signUpFailed } from 'src/redux/user/actions';

export default function* signUpSaga({ payload }) {
  __DEV__ && console.log('Response', payload);
  try {
    const response = yield fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = yield response.json();
    __DEV__ && console.log('Response', json);
    yield put(signUpSucceed);
  } catch (e) {
    __DEV__ && console.error('Error', e);
    yield put(signUpFailed);
  }
}
