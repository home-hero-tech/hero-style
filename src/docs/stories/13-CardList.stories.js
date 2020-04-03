import React from 'react';
import { action } from '@storybook/addon-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';

import Wrapper from '../../helpers/wrapper/Wrapper';
import CardLine from '../../components/organism/card-line/CardLine';
import Input from '../../components/atom/input/Input';

export default {
  title: 'Card',
  component: Card
};

export const CardList = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <List>
      <ListItem>
        <Card>
          <CardItem value="1" label="#" />
          <CardItem value="Ativo" label="Status" />
          <CardItem value="Matheus Alexandre" label="Nome do orçamento" />
          <CardItem value="04 de Set 2019 às 13:58" label="Criado em" />
          <CardItem value="04 de Set 2019 às 13:58" label="Atualizado em" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const small = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <List>
      <ListItem>
        <Card small>
          <CardItem value="1" label="#" small />
          <CardItem value="Ativo" label="Status" small />
          <CardItem value="Matheus Alexandre" label="Nome do orçamento" small />
          <CardItem value="04 de Set 2019 às 13:58" label="Criado em" small />
          <CardItem value="04 de Set 2019 às 13:58" label="Atualizado em" small />
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
      <ListItem>
        <Card>
          <CardItem value="Value" label="Label" col={8} />
          <CardItem value="Value2" label="Label" col={4} />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const ellipses = () => (
  <Wrapper>
    <List level={1}>
      <ListItem>
        <Card>
          <CardItem
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            label="Label"
            md={8}
            ellipsis
          />
          <CardItem value="Value2" label="Label" col={4} />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const _CardLine = () => (
  <Wrapper>
    <List level={5}>
      <ListItem>
        <CardLine>
          <Input
            id="ipt"
            name="ipt"
            type="checkbox"
            defaultChecked
            value="1"
            onChange={action('toggleCheck')}
          />
          <CardItem
            value="Value"
            label="Label"
            leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
          />
          <CardItem
            value="Value"
            label="Label"
            small
            leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
          />
        </CardLine>
      </ListItem>
    </List>
  </Wrapper>
);
