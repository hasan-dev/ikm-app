import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const homesReducer = createReducer(initialState, {
  allHomeRequest: state => {
    state.loading = true;
  },
  allHomeSuccess: (state, action) => {
    (state.loading = false),
      (state.homes = action.payload.homes),
      (state.homesCount = action.payload.homesCount);
    state.filteredHomesCount = action.payload.filteredHomesCount;
  },
  allHomeFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
