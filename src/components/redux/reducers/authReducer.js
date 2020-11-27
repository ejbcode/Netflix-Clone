import { types } from '../types';

const initialState = {};
export const authReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.logout:
      return {};

    default:
      return state;
  }
};
