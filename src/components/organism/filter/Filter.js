import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';

import Text from '../../atom/text/Text';
import BoxShadow from '../../atom/box-shadow/BoxShadow';
import Form from '../form/Form';
import { Grid } from 'react-flexbox-grid';

import css from './Filter.module.scss';

const Filter = ({ tabIndex, onClick, showFilters, totalItems, onSubmit, children }) => {
  const classes = classNames({
    [css['c-filter__content']]: true,
    [css['c-filter__content--open']]: showFilters
  });

  const contentRender = () => (
    <>
    <div className={classes}>{children[0]}</div>
    <div className={css['c-filter__footer']}>{children[1]}</div>
    </>
  );

  return (
    <div className={css['c-filter']}>
      <Form onSubmit={onSubmit}>
        <Grid fluid style={{ padding: 0 }}>
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
          {showFilters ? contentRender() : null}
        </Grid>
      </Form>
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
