import React from 'react';
import { TabList, TabPanel, Tab } from 'react-tabs';

import Tabs from '../../components/molecule/tabs/Tabs';

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

export const Dark = () => (
  <Wrapper style={style}>
    <Tabs dark>
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

export const DarkSecondary = () => (
  <Wrapper style={style}>
    <Tabs darkSecondary>
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

export const ManyTabs = () => (
  <Wrapper style={style}>
    <Tabs dark>
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel>First content</TabPanel>
      <TabPanel>Second content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
      <TabPanel>Third content</TabPanel>
    </Tabs>
  </Wrapper>
);
