import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Heading.module.scss';

const Heading = ({ level, withMargin, title, ...otherProps }) => {
  const classes = classNames({
    [css['c-heading--withMargin']]: withMargin
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
