import { put, takeLatest } from 'redux-saga/effects';
import { CANCEL_SIGN_UP, LOG_OUT } from 'src/redux/navigationController/constants';
import { navigationRoot } from 'src/navigation/rootNavigation';
import { setCurrentPage } from 'src/redux/navigationController/actions';
import PAGES from 'src/navigation/constants';
import { cleanUpUserData } from 'src/redux/user/actions';

function* cancelSignUpSaga() {
  yield put(setCurrentPage(PAGES.PreloadPage));
  yield navigationRoot.goBack();
  yield put(cleanUpUserData());
}

function* logOutSaga() {
  yield put(setCurrentPage(PAGES.PreloadPage));
  yield navigationRoot.navigate(PAGES.PreloadPage);
  yield put(cleanUpUserData());
}

export default function* navigationControllerSaga() {
  yield takeLatest(CANCEL_SIGN_UP, cancelSignUpSaga);
  yield takeLatest(LOG_OUT, logOutSaga);
}
