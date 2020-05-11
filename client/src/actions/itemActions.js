import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from './types';

export const getItems = () => {
  return {
    type: GET_ITEMS,
    // payload: res.data,
  };
};
