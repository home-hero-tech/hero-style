import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';
import BoxShadow from '../../atom/box-shadow/BoxShadow';
import Text from '../../atom/text/Text';

import css from '../../organism/filter/Filter.module.scss';

const FilterHeader = ({ onClick, tabIndex, totalItems, handleOrder, children }) => (
  <BoxShadow level={1} radius={4}>
    <div
      className={css['c-filter__header']}
      onClick={onClick}
      role="button"
      tabIndex={tabIndex}
      onKeyPress={() => {}}
    >
      <div className={css['c-filter__heading']}>
        <Text regular>
          <FontAwesomeIcon icon={faFilter} /> Filtro
        </Text>
      </div>
      <div className={css['c-filter__heading']}>
        <Text center>
          {totalItems} encontrado
          {`${totalItems > 1 ? 's' : ''}`}
        </Text>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
      <div
        onClick={handleOrder}
        role="button"
        className={css['c-filter__heading']}
      >
        <Text end regular>
          <FontAwesomeIcon icon={faSort} /> Ordenar
        </Text>
      </div>
    </div>
    {children}
  </BoxShadow>
);

FilterHeader.propTypes = {
  onClick: PropTypes.func,
  handleOrder: PropTypes.func,
  tabIndex: PropTypes.number,
  totalItems: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object])
};

FilterHeader.defaultProps = {
  children: null,
  onClick: null,
  handleOrder: f => f,
  tabIndex: 0,
  totalItems: 0
};

export default FilterHeader;
