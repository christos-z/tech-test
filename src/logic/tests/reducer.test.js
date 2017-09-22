import {reducer ,filterReducer, initialState } from '../reducer';
import { addItem, removeItem, checkItem, filterItems } from '../actions';

import { SHOW_ALL, HIDE_COMPLETED, HIDE_UNCOMPLETED } from '../../logic/constants';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('Test Content');   
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id === 3);
    expect(result.items[2].content === 'Test Content');
  });

  it('should remove items on REMOVE_ITEM', () => {
    
    const mockAction = removeItem(1);    
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(1);

  });

  it('should check items on CHECK_ITEM', () => {
    
    const mockAction = checkItem(1);    
    const result = reducer(undefined, mockAction);
    expect(result.items[0].checked).toBeTruthy();

  });

  it('should uncheck checked item on CHECK_ITEM', () => {

    const mockAction = checkItem(2);    
    const result = reducer(undefined, mockAction);
    expect(result.items[1].checked).toBeFalsy();

  });

  it('should apply HIDE_COMPLETED filter', () => {

    const mockAction = filterItems(HIDE_COMPLETED);    
    const result = filterReducer(undefined, mockAction);
    expect(result.filterBy == HIDE_COMPLETED);

  });

  it('should apply HIDE_UNCOMPLETED filter', () => {

    const mockAction = filterItems(HIDE_UNCOMPLETED);    
    const result = filterReducer(undefined, mockAction);
    expect(result.filterBy == HIDE_UNCOMPLETED);

  });

  it('should apply SHOW_ALL filter', () => {

    const mockAction = filterItems(SHOW_ALL);    
    const result = filterReducer(undefined, mockAction);
    expect(result.filterBy == SHOW_ALL);

  });
});
