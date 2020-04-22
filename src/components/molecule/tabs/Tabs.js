import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'react-tabs';

import classNames from 'classnames';

import css from './Tabs.module.scss';

const TabsComponent = ({ dark, children, ...otherProps }) => {
  const classes = classNames({
    [css['c-tabs']]: true,
    [css['c-tabs--dark']]: !!dark
  });

  return (
    <Tabs className={classes} {...otherProps}>
      {children}
    </Tabs>
  );
};

TabsComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  dark: PropTypes.bool
};

TabsComponent.defaultProps = {
  children: null,
  dark: false
};

TabsComponent.displayName = 'TabsComponent';

export default TabsComponent;
