import React from 'react';

import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Content from '../../helpers/content/Content';

export default {
  title: 'List',
  component: List
};

export const DefaultList = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level0 = () => (
  <Wrapper>
    <List level={0}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level1 = () => (
  <Wrapper>
    <List level={1}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level2 = () => (
  <Wrapper>
    <List level={2}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level3 = () => (
  <Wrapper>
    <List level={3}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level4 = () => (
  <Wrapper>
    <List level={4}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);

export const Level5 = () => (
  <Wrapper>
    <List level={5}>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
      <ListItem>
        <Content>Content</Content>
      </ListItem>
    </List>
  </Wrapper>
);
