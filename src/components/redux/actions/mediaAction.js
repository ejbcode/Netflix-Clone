import { types } from '../types';

export const showDetail = (id) => ({
  type: types.showDetail,
  payload: id,
});

export const hideDetail = () => ({
  type: types.hideDetail,
});
