import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';

function* rootSaga() {
  const sagas = [userSaga()];
  yield all(sagas);
}

export default rootSaga;
