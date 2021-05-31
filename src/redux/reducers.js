import { combineReducers } from 'redux';
import { userReducer } from 'src/redux/user/reducer';

const rootReducer = () =>
  combineReducers({
    userReducer,
  });

export default rootReducer;
