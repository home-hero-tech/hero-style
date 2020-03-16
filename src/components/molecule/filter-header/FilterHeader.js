import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';
import BoxShadow from '../../atom/box-shadow/BoxShadow';
import Text from '../../atom/text/Text';

import css from '../../organism/filter/Filter.module.scss';

const FilterHeader = ({ onClick, tabIndex, totalItems }) => (
  <BoxShadow level={1} radius={4}>
    <div
      className={css['c-filter__header']}
      onClick={onClick}
      role="button"
      tabIndex={tabIndex}
      onKeyPress={() => {}}
    >
      <div className={css['c-filter__heading']}>
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtro</span>
      </div>
      <div className={css['c-filter__heading']}>
        <Text center>
          {totalItems} encontrado
          {`${totalItems > 1 ? 's' : ''}`}
        </Text>
      </div>
      <div className={css['c-filter__heading']}>
        <Text end>
          <FontAwesomeIcon icon={faSort} /> Ordernar: A-z
        </Text>
      </div>
    </div>
  </BoxShadow>
);

FilterHeader.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  totalItems: PropTypes.number
};

FilterHeader.defaultProps = {
  onClick: null,
  tabIndex: 0,
  totalItems: 0
};

export default FilterHeader;
