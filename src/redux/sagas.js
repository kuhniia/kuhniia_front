import { all } from 'redux-saga/effects';

import userSaga from './user/sagas';
import navigationControllerSaga from 'src/redux/navigationController/sagas';

function* rootSaga() {
  const sagas = [userSaga(), navigationControllerSaga()];
  yield all(sagas);
}

export default rootSaga;
