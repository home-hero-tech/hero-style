import React from 'react';

import { action } from '@storybook/addon-actions';
import ListItemContent from '../../components/molecule/list-item-content/ListItemContent';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import ListItemCWrapper from '../../components/organism/list-item-c-wrapper/ListItemCWrapper';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Content from '../../helpers/content/Content';
import Input from '../../components/atom/input/Input';
import CardItem from '../../components/atom/card-item/CardItem';

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

export const withActions = () => (
  <Wrapper>
    <List level={5}>
      <ListItem>
        <ListItemCWrapper>
          <ListItemContent isAction>
            <Input
              id="ipt"
              name="ipt"
              type="checkbox"
              defaultChecked
              value="1"
              onChange={action('toggleCheck')}
            />
          </ListItemContent>
          <ListItemContent>
            <CardItem value="Value" label="Label" />
            <CardItem value="Value" label="Label" />
            <CardItem value="Value" label="Label" />
          </ListItemContent>
        </ListItemCWrapper>
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

export const withActionsBorder = () => (
  <Wrapper>
    <List level={5}>
      <ListItem>
        <ListItemCWrapper>
          <ListItemContent isAction>
            <Input
              id="ipt"
              name="ipt"
              type="checkbox"
              defaultChecked
              value="1"
              onChange={action('toggleCheck')}
            />
          </ListItemContent>
          <ListItemContent border>
            <CardItem value="Value" label="Label" />
            <CardItem value="Value" label="Label" />
            <CardItem value="Value" label="Label" />
          </ListItemContent>
        </ListItemCWrapper>
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
