import { put } from 'redux-saga/effects';
import { logInSucceed, logInFailed } from 'src/redux/user/actions';
import PAGES from 'src/navigation/constants';
import { navigationRoot } from 'src/navigation/rootNavigation';

export default function* logInSaga({ payload }) {
  __DEV__ && console.log('Request', payload);

  const { username, password } = payload;

  try {
    const response = yield fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = yield response.json();
    __DEV__ && console.log('Response', json);
    if (json?.token) {
      yield put(logInSucceed(json?.token));
      navigationRoot.navigate(PAGES.MainPage);
    } else {
      throw Error();
    }
  } catch (error) {
    __DEV__ && console.error('Error', error);
    yield put(logInFailed(error));
  }
}
