import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ style, children }) => <div style={style}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.shape({
    maxWidth: PropTypes.string,
    margin: PropTypes.string
  })
};

Wrapper.defaultProps = {
  children: null,
  style: {
    maxWidth: '500px',
    margin: '20px'
  }
};

export default Wrapper;
