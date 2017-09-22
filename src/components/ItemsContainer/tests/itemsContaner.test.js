import React from 'react';
import { shallow } from 'enzyme';
import ItemsContaner from '../index';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({ todos: { items: []}, filters: [] })


describe('ItemsContaner', () => {
  it('renders without crashing', () => {
    shallow(<ItemsContaner store={store} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsContaner store={store} />);
    expect(renderedItem.shallow().find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const store = mockStore({ todos: { items: items}, filters: [] })
    const renderedItem = shallow(<ItemsContaner store={store} />);
    expect(renderedItem.shallow().find('#items-missing')).toHaveLength(0);
  });


});
