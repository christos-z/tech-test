import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from '../index';

const defaultProps = {
  items: [{ id: 1, content: 'Test 1'}],
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should render a todo item', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} />);
    expect(renderedItem.find('.todo-item')).toHaveLength(1);
  });
  
  it('should not display any checked items if none have been checked', () => {
    defaultProps.items[0].checked =  false;
    const renderedItem = shallow(<ItemsList {...defaultProps} />);
    expect(renderedItem.find('.checked')).toHaveLength(0);
  });

  it('should display checked items if any have been checked', () => {
    defaultProps.items[0].checked = true;
    const renderedItem = shallow(<ItemsList {...defaultProps} />);
    expect(renderedItem.find('.checked')).toHaveLength(1);
  });

});
