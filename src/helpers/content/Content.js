import React from 'react';
import PropTypes from 'prop-types';

const _contentStyle = {
  background: '#8dcaff'
};

const Content = ({ children }) => <div style={_contentStyle}>{children}</div>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Content.defaultProps = {
  children: null
};

export default Content;
