import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'react-tabs';

import classNames from 'classnames';

import css from './Tabs.module.scss';

const TabsComponent = ({
  white,
  dark,
  darkSecondary,
  children,
  ...otherProps
}) => {
  const classes = classNames({
    [css['c-tabs']]: true,
    [css['c-tabs--white']]: !!white,
    [css['c-tabs--dark']]: !!dark,
    [css['c-tabs--dark-secondary']]: !!darkSecondary
  });

  return (
    <Tabs className={classes} {...otherProps}>
      {children}
    </Tabs>
  );
};

TabsComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dark: PropTypes.bool,
  white: PropTypes.bool,
  darkSecondary: PropTypes.bool
};

TabsComponent.defaultProps = {
  children: null,
  dark: false,
  white: false,
  darkSecondary: false
};

TabsComponent.displayName = 'TabsComponent';

export default TabsComponent;
