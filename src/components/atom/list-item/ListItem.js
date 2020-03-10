import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children }) => <li>{children}</li>;

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

ListItem.defaultProps = {
  children: null
};

export default ListItem;
