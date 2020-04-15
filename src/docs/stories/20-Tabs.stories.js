import React, { useState } from 'react';
// react-tabs
import { TabList, TabPanel, Tab } from 'react-tabs';
// rc-tabs
import { TabPane as ScrollablePanel } from 'rc-tabs';

import Tabs from '../../components/molecule/tabs/Tabs';
import ScrollableTabs from '../../components/molecule/tabs/ScrollableTabs';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'Tabs',
  component: Tabs
};

const style = {
  width: '100%',
  height: '100%'
};

export const Default = () => (
  <Wrapper style={style}>
    <Tabs>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel>First content</TabPanel>
      <TabPanel>Second content</TabPanel>
      <TabPanel>Third content</TabPanel>
    </Tabs>
  </Wrapper>
);

export const Scrollable = () => {
  const [activeKey, setActiveKey] = useState('1');

  const onChange = currentKey => setActiveKey(currentKey);

  const onTabClick = key => {
    if (key !== activeKey) {
      onChange('');
    }
  };

  const numbers = {
    1: 'First',
    2: 'Second',
    3: 'Third',
    4: 'Fourth'
  };

  return (
    <Wrapper style={style}>
      <ScrollableTabs
        onChange={onChange}
        onTabClick={onTabClick}
        activeKey={activeKey}
      >
        {[1, 2, 3, 4].map((item, index) => (
          <ScrollablePanel
            tab={`${numbers[index + 1]} tab`}
            key={`${index + 1}`}
          >
            {index + 1} - Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Animi commodi cumque fuga repellendus voluptas. Delectus
            distinctio doloribus error eveniet fugiat neque odit quas recusandae
            totam? Deserunt distinctio est iste reiciendis.
          </ScrollablePanel>
        ))}
        <ScrollablePanel tab="Disabed" key="5" disabled />
      </ScrollableTabs>
    </Wrapper>
  );
};

export const ScrollableDark = () => {
  const [activeKey, setActiveKey] = useState('1');

  const onChange = currentKey => setActiveKey(currentKey);

  const onTabClick = key => {
    if (key !== activeKey) {
      onChange('');
    }
  };

  const numbers = {
    1: 'First',
    2: 'Second',
    3: 'Third',
    4: 'Fourth'
  };

  return (
    <Wrapper style={style}>
      <ScrollableTabs
        onChange={onChange}
        onTabClick={onTabClick}
        activeKey={activeKey}
        dark
      >
        {[1, 2, 3, 4].map((item, index) => (
          <ScrollablePanel
            tab={`${numbers[index + 1]} tab`}
            key={`${index + 1}`}
          >
            {index + 1} - Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Animi commodi cumque fuga repellendus voluptas. Delectus
            distinctio doloribus error eveniet fugiat neque odit quas recusandae
            totam? Deserunt distinctio est iste reiciendis.
          </ScrollablePanel>
        ))}
        <ScrollablePanel tab="Disabed" key="5" disabled />
      </ScrollableTabs>
    </Wrapper>
  );
};
