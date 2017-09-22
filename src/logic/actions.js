import { ADD_ITEM, REMOVE_ITEM, CHECK_ITEM, FILTER_ITEMS } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const removeItem = itemIndex => {
  return { type: REMOVE_ITEM, itemIndex };
};

export const checkItem = itemIndex => {
  return { type: CHECK_ITEM, itemIndex };
};

export const filterItems = filterBy => {
  return { type: FILTER_ITEMS, filterBy };
};
