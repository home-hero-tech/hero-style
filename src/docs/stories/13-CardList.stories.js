import React from 'react';

import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'Card',
  component: Card
};

export const CardList = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem value="some value" label="label" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const mLg = () => (
  <Wrapper>
    <List level={4}>
      <ListItem>
        <Card>
          <CardItem value="some value" label="label" />
        </Card>
      </ListItem>
      <ListItem>
        <Card>
          <CardItem value={new Date()} label="Última atualização" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const mSm = () => (
  <Wrapper>
    <List level={1}>
      <ListItem>
        <Card>
          <CardItem value="Some value" label="Label" primary />
        </Card>
      </ListItem>
      <ListItem>
        <Card>
          <CardItem value="Value" label="Label" />
          <CardItem value="Value2" label="Label" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);
