import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem } from '../../logic/actions';

export const ItemsRemover = ({ item, onRemove }) => {
  return (
        <input className={'removeTask-button'} type="button" value={'Remove Task'} 
          onClick={() => {
          item.id && onRemove(item.id);
        }}/>
  );
};

ItemsRemover.propTypes = {
  onRemove: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onRemove: itemIndex => dispatch(removeItem(itemIndex)),
});

export default connect(null, mapDispatchToProps)(ItemsRemover);
