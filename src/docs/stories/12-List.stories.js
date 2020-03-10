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

export const mXxs = () => (
  <Wrapper>
    <List mXxs>
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

export const mXs = () => (
  <Wrapper>
    <List mXs>
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

export const mSm = () => (
  <Wrapper>
    <List mSm>
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

export const mMd = () => (
  <Wrapper>
    <List mMd>
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

export const mLg = () => (
  <Wrapper>
    <List mLg>
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

export const mXlg = () => (
  <Wrapper>
    <List mXlg>
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
