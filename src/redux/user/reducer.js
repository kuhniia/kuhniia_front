import { TYPES } from './constants';

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TYPES.SIGN_UP_INIT: {
      return {
        currentUser: payload,
      };
    }
    default:
      return state;
  }
};
