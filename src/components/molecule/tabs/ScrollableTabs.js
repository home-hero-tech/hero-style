import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import classNames from 'classnames';

import css from './ScrolalbleTabs.module.scss';

const ScrollableTabs = ({
  activeKey,
  children,
  dark,
  nextIcon,
  onChange,
  onTabClick,
  prevIcon
}) => {
  const classes = classNames({
    [css['c-scroll-tabs']]: true,
    [css['c-scroll-tabs--dark']]: dark
  });

  return (
    <Tabs
      renderTabBar={() => (
        <ScrollableInkTabBar
          onTabClick={onTabClick}
          prevIcon={prevIcon}
          nextIcon={nextIcon}
        />
      )}
      renderTabContent={() => <TabContent animatedWithMargin />}
      activeKey={activeKey}
      onChange={onChange}
      className={classes}
    >
      {children}
    </Tabs>
  );
};

ScrollableTabs.propTypes = {
  activeKey: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  dark: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onTabClick: PropTypes.func,
  prevIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  nextIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
ScrollableTabs.defaultProps = {
  dark: false,
  onTabClick: f => f,
  prevIcon: '<',
  nextIcon: '>'
};

export default ScrollableTabs;
