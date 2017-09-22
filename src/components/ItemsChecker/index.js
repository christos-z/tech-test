import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkItem } from '../../logic/actions';

export const ItemsChecker = ({ item, onCheckItem }) => {
  return (
        <input type="button" className={'itemToggle-button'} value={'Toggle Task'} 
          onClick={() => {
          item.id && onCheckItem(item.id);
        }}/>
  );
};

ItemsChecker.propTypes = {
  onCheckItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onCheckItem: itemId => dispatch(checkItem(itemId)),
});

export default connect(null, mapDispatchToProps)(ItemsChecker);
