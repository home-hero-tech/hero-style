import React from 'react';
import PropTypes from 'prop-types';
import RPagination from 'react-js-pagination';
import css from './Pagination.module.scss';

const Pagination = ({ activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, onClick, onChange }) => {
  return (
    <div className={css['c-pagination']}>
      <RPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
        onClick={onClick}
        itemClass="page"
      />
    </div>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  itemsCountPerPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

Pagination.defaultProps = {
  activePage: 1,
  itemsCountPerPage: 20,
  totalItemsCount: null,
  pageRangeDisplayed: 5,
  onClick: f => f,
  onChange: f => f
};

export default Pagination;
