import { createSelector } from 'reselect';

const userSelector = (state) => state.userReducer;

export const selectIsUserLoading = createSelector(userSelector, ({ isLoading }) => isLoading);

export const selectIsUserError = createSelector(userSelector, ({ error }) => error);
