import { put } from 'redux-saga/effects';
import { signUpSucceed, signUpFailed } from 'src/redux/user/actions';
import PAGES from 'src/navigation/constants';
import { navigationRoot } from 'src/navigation/rootNavigation';
import { ERROR_TYPES } from 'src/constants/errors';
import { texts } from 'src/translations';
import { EMAIL_SCHEMA, PASSWORD_SCHEMA, USERNAME_SCHEMA } from 'src/constants/validationConstants';

export default function* signUpSaga({ payload }) {
  __DEV__ && console.log('Request', payload);

  const { email, username, password } = payload.userInputData;

  if (!EMAIL_SCHEMA.test(email)) {
    return yield put(
      signUpFailed({ error: { type: ERROR_TYPES.EMAIL_DO_NOT_MATCH_REGEX, message: texts.emailValidationError } }),
    );
  }

  if (!USERNAME_SCHEMA.test(username)) {
    return yield put(
      signUpFailed({
        error: { type: ERROR_TYPES.USERNAME_DO_NOT_MATCH_REGEX, message: texts.usernameValidationError },
      }),
    );
  }

  if (!PASSWORD_SCHEMA.test(password)) {
    return yield put(
      signUpFailed({
        error: { type: ERROR_TYPES.PASSWORD_DO_NOT_MATCH_REGEX, message: texts.passwordValidationError },
      }),
    );
  }

  if (payload?.passwordConfirm !== payload.userInputData.password) {
    return yield put(
      signUpFailed({ error: { type: ERROR_TYPES.PASSWORD_MISMATCH, message: texts.passwordValidationError } }),
    );
  }

  try {
    const response = yield fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.userInputData),
    });

    const json = yield response.json();
    __DEV__ && console.log('Response', json);
    navigationRoot.navigate(PAGES.MainPage);
    yield put(signUpSucceed({ user: json }));
  } catch (error) {
    __DEV__ && console.error('Error', error);
    yield put(signUpFailed(error));
  }
}
