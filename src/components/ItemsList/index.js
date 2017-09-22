import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemsRemover from '../ItemsRemover';
import ItemsChecker from '../ItemsChecker';

import { SHOW_ALL, HIDE_COMPLETED, HIDE_UNCOMPLETED } from '../../logic/constants';

class ItemsList extends Component {

  constructor(props) {
   super(props)
      const { items, filterBy } = this.props
  }
  render() {
    const { items, filterBy } = {...this.props};
    const filteredItems = items.filter(item => {
        
        if(filterBy === SHOW_ALL ||
          item.checked === true && filterBy !== HIDE_COMPLETED ||
          item.checked !== true && filterBy !== HIDE_UNCOMPLETED
        )
        {
          return item
        }
      })

    const filteredItemsHTML = filteredItems.map( item => 
      
      <li className={'todo-item'} key={item.id}> 
        {
          item.checked ? <s className={'checked'}>{item.content}</s> : item.content
        }
        <ItemsRemover item={item} />
        <ItemsChecker item={item} />
      </li>
    );

    return (
      <div>
        <ul className={'itemsList-ul'}>
          { filteredItemsHTML }
        </ul>
      </div>
    );
  }
}

// ItemsList.propTypes = {
//   items: PropTypes.array.isRequired,
//   filterBy: PropTypes.array.isRequired,
// };

export default ItemsList;