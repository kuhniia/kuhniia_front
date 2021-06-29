import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'src/redux/reducers';
import rootSaga from 'src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = (store) => (next) => (action) => {
  __DEV__ && console.log('dispatching', action);
  let result = next(action);
  __DEV__ && console.log('next state', store.getState());
  return result;
};

const initMiddleware = () => [logger, sagaMiddleware];

const middlewares = initMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
