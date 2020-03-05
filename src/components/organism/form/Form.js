import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ children }) => <form>{children}</form>;

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default Form;
