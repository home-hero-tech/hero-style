import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';

import Text from '../../atom/text/Text';
import BoxShadow from '../../atom/box-shadow/BoxShadow';
import css from './Filter.module.scss';

const Filter = ({ tabIndex, onClick, showFilters, totalItems, children }) => {
  const classes = classNames({
    [css['c-filter__content']]: true,
    [css['c-filter__content--open']]: showFilters
  });

  return (
    <div className={css['c-filter']}>
      <BoxShadow level={1}>
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
      {showFilters ? <div className={classes}>{children}</div> : null}
    </div>
  );
};

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  onClick: PropTypes.func,
  showFilters: PropTypes.bool,
  tabIndex: PropTypes.number,
  totalItems: PropTypes.number
};

Filter.defaultProps = {
  onClick: null,
  showFilters: false,
  tabIndex: 0,
  totalItems: 0
};

export default Filter;
