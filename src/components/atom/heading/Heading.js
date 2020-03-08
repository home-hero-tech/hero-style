import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, title, ...otherProps }) => {
  const headingMaps = {
    1: (
      <h1 title={title} {...otherProps}>
        {title}
      </h1>
    ),
    2: (
      <h2 title={title} {...otherProps}>
        {title}
      </h2>
    ),
    3: (
      <h3 title={title} {...otherProps}>
        {title}
      </h3>
    ),
    4: (
      <h4 title={title} {...otherProps}>
        {title}
      </h4>
    ),
    5: (
      <h5 title={title} {...otherProps}>
        {title}
      </h5>
    ),
    6: (
      <h6 title={title} {...otherProps}>
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
