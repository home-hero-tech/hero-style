import React from 'react';
import PropTypes from 'prop-types';

import css from './Tooltip.module.scss';

const { Tooltip: Wrapper } = require('react-tippy');

const ToolTip = ({ description, animation, children, ...otherProps }) => {
  return (
    <Wrapper
      arrow
      arrowSize="small"
      animation={animation}
      className={css['c-tooltip']}
      title={description}
      {...otherProps}
    >
      {children}
    </Wrapper>
  );
};

ToolTip.propTypes = {
  animation: PropTypes.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
  description: PropTypes.string.isRequired
};

ToolTip.defaultProps = {
  animation: 'perspective'
};

export default ToolTip;
