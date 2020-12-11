import { types } from '../types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        redirectToWho: true,
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
