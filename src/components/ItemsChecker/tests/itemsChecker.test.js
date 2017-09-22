import React from 'react';
import { shallow } from 'enzyme';
import ItemsChecker from '../index';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({ todos: { items: []}, filters: [] })

describe('ItemFilter', () => {
  it('renders without crashing', () => {
    shallow(<ItemsChecker store={store} />);
  });

  it('the buttons to check tasks should exist', () => {
    const renderedItem = shallow(<ItemsChecker store={store} />);
    expect(renderedItem.shallow().find('.itemToggle-button')).toHaveLength(1);
  });

});
