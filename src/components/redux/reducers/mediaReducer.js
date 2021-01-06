import { types } from '../types';

const initialState = { isModalOpened: false, id: null, favorites: [] };

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showDetail:
      return {
        ...state,
        isModalOpened: true,
        id: action.payload,
      };

    case types.hideDetail:
      return {
        ...state,
        isModalOpened: false,
        id: null,
      };

    case types.addFavorites:
      return {
        ...state,
        favorites: action.payload,
      };

    default:
      return state;
  }
};
