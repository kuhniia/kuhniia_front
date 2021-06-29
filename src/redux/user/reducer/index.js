import { TYPES } from 'src/redux/user/constants';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TYPES.SIGN_UP_INIT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TYPES.SIGN_UP_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        currentUser: payload.user,
      };
    }
    case TYPES.SIGN_UP_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    }
    case TYPES.CLEAN_UP_USER_DATA: {
      return initialState;
    }
    default:
      return state;
  }
};
