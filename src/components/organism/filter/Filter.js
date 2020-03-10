import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/pro-light-svg-icons'
import { Row, Col } from 'react-flexbox-grid';

import css from './Filter.module.scss';

const Filter = ({ onSubmit, onClick, showFilters, children }) => {
  const classes = classNames({
    [css['c-filter__content']]: true,
    [css['c-filter__content--open']]: showFilters
  });

  return (
    <div className={css['c-filter']}>
      <div className={css['header']} onClick={(e) => {
        console.log(showFilters);
        onClick(!showFilters);
      }
      }>
        <Row>
          <Col md={2}>
            <FontAwesomeIcon icon={faFilter}/>
            <span>Filtro</span>
          </Col>
          <Col md>
            <p>0 encontrados</p>
          </Col>
          <Col md={2}>
            Ordenar
          </Col>
        </Row>
      </div>
      <div className={classes}>{children}</div>
  </div>)
};

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
};

Filter.defaultProps = {};

export default Filter;