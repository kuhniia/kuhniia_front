import { TYPES } from 'src/redux/user/constants';

const initialState = {
  validToken: null,
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
    case TYPES.LOG_IN_INIT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TYPES.LOG_IN_SUCCEED: {
      return {
        ...state,
        isLoading: false,
        validToken: payload,
      };
    }
    case TYPES.LOG_IN_FAILED: {
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
