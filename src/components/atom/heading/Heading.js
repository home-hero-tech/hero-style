import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Heading.module.scss';

const Heading = ({
  level,
  withMargin,
  gray,
  light,
  bold,
  title,
  uppercase,
  lowercase,
  capitalize,
  primary,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-heading--withMargin']]: withMargin,
    [css['c-heading--gray']]: gray,
    [css['c-heading--primary']]: primary,
    [css['c-heading--bold']]: bold,
    [css['c-heading--light']]: light,
    [css['c-heading--uppercase']]: uppercase,
    [css['c-heading--lowercase']]: lowercase,
    [css['c-heading--capitalize']]: capitalize
  });

  const headingMaps = {
    1: (
      <h1 className={classes} title={title} {...otherProps}>
        {title}
      </h1>
    ),
    2: (
      <h2 className={classes} title={title} {...otherProps}>
        {title}
      </h2>
    ),
    3: (
      <h3 className={classes} title={title} {...otherProps}>
        {title}
      </h3>
    ),
    4: (
      <h4 className={classes} title={title} {...otherProps}>
        {title}
      </h4>
    ),
    5: (
      <h5 className={classes} title={title} {...otherProps}>
        {title}
      </h5>
    ),
    6: (
      <h6 className={classes} title={title} {...otherProps}>
        {title}
      </h6>
    )
  };

  return headingMaps[level];
};

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

Heading.defaultProps = {};

export default Heading;
