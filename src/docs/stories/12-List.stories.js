import React from 'react';

import { action } from '@storybook/addon-actions';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Content from '../../helpers/content/Content';
import Input from '../../components/atom/input/Input';
import CardItem from '../../components/atom/card-item/CardItem';
import CardLine from '../../components/organism/card-line/CardLine';
import EmptyCardItem from '../../components/atom/empty-card-item/EmptyCardItem';

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
        <CardLine>
          <EmptyCardItem>
            <Input
              id="ipt"
              name="ipt"
              type="checkbox"
              defaultChecked
              value="1"
              onChange={action('toggleCheck')}
            />
          </EmptyCardItem>
          <CardItem value="Value" label="Label" />
          <CardItem value="Value" label="Label" />
          <CardItem value="Value" label="Label" />
        </CardLine>
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

export const ListAndSubList = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Content>
          <List>
            <ListItem>
              <Content style={{ backgroundColor: 'red' }}>Content</Content>
            </ListItem>
            <ListItem>
              <Content>Content</Content>
            </ListItem>
            <ListItem>
              <Content>Content</Content>
            </ListItem>
          </List>
        </Content>
      </ListItem>
    </List>
  </Wrapper>
);
