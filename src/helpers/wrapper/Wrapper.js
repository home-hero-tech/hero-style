import React from 'react';
import PropTypes from 'prop-types';

const _style = {
  maxWidth: '500px',
  margin: '20px'
};

const Wrapper = ({ children }) => <div style={_style}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Wrapper.defaultProps = {
  children: null
};

export default Wrapper;
