import { TYPES } from 'src/redux/navigationController/constants';

const initialState = {
  currentPage: null,
  navigateBackTo: null,
};

export const navigationControllerReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TYPES.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case TYPES.SET_NAVIGATE_BACK_TO_PAGE: {
      return {
        ...state,
        navigateBackTo: payload,
      };
    }
    default:
      return state;
  }
};
