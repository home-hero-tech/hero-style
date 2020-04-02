import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'CardItem',
  component: CardItem
};

export const Default = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem value="Default" label="Default" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const small = () => (
  <Wrapper>
    <Card>
      <CardItem value="small" label="small" small />
    </Card>
  </Wrapper>
);

export const Primary = () => (
  <Wrapper>
    <Card>
      <CardItem value="Primary" label="Primary" primary />
    </Card>
  </Wrapper>
);

export const lbPrimary = () => (
  <Wrapper>
    <Card>
      <CardItem value="lbPrimary" label="lbPrimary" lbPrimary />
    </Card>
  </Wrapper>
);

export const valPrimary = () => (
  <Wrapper>
    <Card>
      <CardItem value="valPrimary" label="valPrimary" valPrimary />
    </Card>
  </Wrapper>
);

export const Gray = () => (
  <Wrapper>
    <Card>
      <CardItem value="gray" label="gray" gray />
    </Card>
  </Wrapper>
);

export const lbGray = () => (
  <Wrapper>
    <Card>
      <CardItem value="lbGray" label="lbGray" lbGray />
    </Card>
  </Wrapper>
);

export const LeftIcon = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="valGray"
        label="valGray"
        gray
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
      />
    </Card>
  </Wrapper>
);
