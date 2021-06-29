import { combineReducers } from 'redux';
import { userReducer } from 'src/redux/user/reducer';
import { navigationControllerReducer } from 'src/redux/navigationController/reducer';

const rootReducer = () =>
  combineReducers({
    userReducer,
    navigationControllerReducer,
  });

export default rootReducer;
