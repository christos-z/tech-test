import React from 'react';
import { shallow } from 'enzyme';
import ItemsRemover from '../index';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({ todos: { items: []}, filters: [] })

describe('ItemsRemover', () => {
  it('renders without crashing', () => {
    shallow(<ItemsRemover store={store} />);
  });

  it('the button to remove tasks should exist', () => {
    
    const renderedItem = shallow(<ItemsRemover store={store} />);
    expect(renderedItem.shallow().find('.removeTask-button')).toHaveLength(1);
  });

  it('the button to remove tasks should exist', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const store = mockStore({ todos: { items: items}, filters: [] })
    const renderedItem = shallow(<ItemsRemover store={store} />);
    expect(renderedItem.shallow().find('.removeTask-button')).toHaveLength(1);
  });


});
