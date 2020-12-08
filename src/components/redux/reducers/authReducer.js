import { types } from '../types';

const initialState = { log: true };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      console.log('login');

      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.test:
      console.log('test reducer');
      return {
        ...state,
        log: false,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
