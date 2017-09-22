import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsList from '../ItemsList';

import './styles.css';

const ItemsContainer = (ChildComponent) => class extends Component {
    
    render(){
        return <div>
        {this.props.items.length === 0  ? 
            <p id={'items-missing'}>Add some tasks above.</p> :
          <ChildComponent {...this.props}/>}
      </div>
    }
  }


const mapStateToProps = state => {
  return { 
    items: state.todos.items,
    filterBy: state.filters.filterBy 
  };
};

export default connect(mapStateToProps, null)(ItemsContainer(ItemsList));