import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import css from './ScrolalbleTabs.module.scss';

const ScrollableTabs = ({
  activeKey,
  onChange,
  onTabClick,
  prevIcon,
  nextIcon,
  children
}) => {
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
      className={css['c-scroll-tabs']}
    >
      {children}
    </Tabs>
  );
};

ScrollableTabs.propTypes = {
  activeKey: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  onTabClick: PropTypes.func,
  prevIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  nextIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
ScrollableTabs.defaultProps = {
  onTabClick: f => f,
  prevIcon: '<',
  nextIcon: '>'
};

export default ScrollableTabs;
