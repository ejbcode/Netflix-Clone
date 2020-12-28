import { types } from '../types';

const initialState = {
  loading: false,
  errorMessage: null,
  profile: { id: 1, fullName: 'Ernesto' },
};

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

    case types.setErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
