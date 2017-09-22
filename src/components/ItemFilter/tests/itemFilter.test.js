import React from 'react';
import { shallow } from 'enzyme';
import ItemFilter from '../index';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({ todos: { items: []}, filters: [] })

describe('ItemFilter', () => {
  it('renders without crashing', () => {
    shallow(<ItemFilter store={store} />);
  });

  it('the buttons to filter tasks should exist', () => {
    
    const renderedItem = shallow(<ItemFilter store={store} />);
    expect(renderedItem.shallow().find('.itemFilter-button')).toHaveLength(3);
    expect(renderedItem.shallow().find('.itemFilter-button [value="Show All"]')).toHaveLength(1);
    expect(renderedItem.shallow().find('.itemFilter-button [value="Hide Completed"]')).toHaveLength(1);
    expect(renderedItem.shallow().find('.itemFilter-button [value="Hide Un Completed"]')).toHaveLength(1);
  });

});
