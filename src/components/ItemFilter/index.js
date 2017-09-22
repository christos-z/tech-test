import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterItems } from '../../logic/actions';

import { SHOW_ALL, HIDE_COMPLETED, HIDE_UNCOMPLETED } from '../../logic/constants';

export const ItemFilter = ({item, filterList}) => {

    return (
        <div>
            <input type="button" className={'itemFilter-button'} value={'Show All'} onClick={() => {filterList(SHOW_ALL);}}/>
            <input type="button" className={'itemFilter-button'} value={'Hide Completed'} onClick={() => {filterList(HIDE_COMPLETED);}}/>
            <input type="button" className={'itemFilter-button'} value={'Hide Un Completed'} onClick={() => {filterList(HIDE_UNCOMPLETED);}}/>
        </div>
    );

};

ItemFilter.propTypes = {
  filterList: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  filterList: filterBy => dispatch(filterItems(filterBy)),
});


export default connect(null, mapDispatchToProps)(ItemFilter);


