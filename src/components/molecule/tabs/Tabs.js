import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'react-tabs';

import css from './Tabs.module.scss';

const TabsComponent = ({ children }) => {
  return <Tabs className={css['c-tabs']}>{children}</Tabs>;
};

TabsComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

TabsComponent.defaultProps = {
  children: null
};

export default TabsComponent;
