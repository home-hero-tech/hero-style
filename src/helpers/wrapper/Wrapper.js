import React from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
  maxWidth: '500px',
  margin: '20px'
};

const Wrapper = ({ style, children }) => {
  const _style = { ...defaultStyle, ...style };

  return <div style={_style}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.shape({
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

Wrapper.defaultProps = {
  children: null,
  style: defaultStyle
};

export default Wrapper;
