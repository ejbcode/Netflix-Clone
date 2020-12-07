import { types } from '../types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.types) {
    case types.login:
      console.log('login');
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
