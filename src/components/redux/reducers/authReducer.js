import { types } from '../types';

const initialState = { profile: { id: 1, fullName: 'Ernesto' } };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.setProfile:
      return {
        ...state,
        profile: action.payload,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
