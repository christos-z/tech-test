import { combineReducers } from 'redux';
import { reducer, filterReducer } from '../logic/reducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    filters: filterReducer,
  });
}
