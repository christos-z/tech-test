import { ADD_ITEM, REMOVE_ITEM, CHECK_ITEM, FILTER_ITEMS, SHOW_ALL } from './constants';

let currentId = 2;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable'},
    { id: 2, content: 'Add filters (Use HOC)', checked: true },
  ],
  filterBy: SHOW_ALL
};

export const filterReducer = (state = initialState, action) => {
 
  if (action.type === FILTER_ITEMS) {
    return { 
      ...state, 
      filterBy: action.filterBy
    } 
  }else {
    return state;
  }
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_ITEM:
      currentId++;
      const newItem = {
        id: currentId,
        content: action.content,
        checked: action.checked
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case REMOVE_ITEM:

      return {
        ...state,
        items: state.items.filter(item => action.itemIndex !== item.id)
      };

    case CHECK_ITEM:

      return { 
          ...state, 
          items: state.items.map(
              (item, i) => item.id === action.itemIndex ? {
                ...item, checked: state.items[i].checked = !state.items[i].checked || false
              } : item
          )
        }

    default:
      return state;
  }
};

export default {reducer, filterReducer};
