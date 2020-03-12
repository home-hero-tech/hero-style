import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';
import { Row, Col } from 'react-flexbox-grid';

import css from './Filter.module.scss';

const Filter = ({ tabIndex, onClick, showFilters, totalItems, children }) => {
  const classes = classNames({
    [css['c-filter__content']]: true,
    [css['c-filter__content--open']]: showFilters
  });

  return (
    <div className={css['c-filter']}>
      <div
        className={css['c-filter__header']}
        onClick={onClick}
        role="button"
        tabIndex={tabIndex}
        onKeyPress={() => {}}
      >
        <Row>
          <Col md={2}>
            <FontAwesomeIcon icon={faFilter} />
            <span>Filtro</span>
          </Col>
          <Col md>
            <p>
              {totalItems}
              encontrados
            </p>
          </Col>
          <Col md={2}>
            <FontAwesomeIcon icon={faSort} />
            <span>Ordernar: A-z</span>
          </Col>
        </Row>
      </div>
      <div className={classes}>{children}</div>
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
