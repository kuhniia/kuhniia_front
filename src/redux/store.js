import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from 'src/redux/reducers';
import rootSaga from 'src/redux/sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer(), applyMiddleware(routerMiddleware(), sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
