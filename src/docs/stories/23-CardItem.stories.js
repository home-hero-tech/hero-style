import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/old_card/Card';
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

export const Label = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem label="Default" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const Value = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem value="Default" />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const small = () => (
  <Wrapper>
    <Card>
      <CardItem value="Small" label="Small" small />
    </Card>
  </Wrapper>
);

export const LabelSmall = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem label="Default" small />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const ValueSmall = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardItem value="Default" small />
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const smallSvg = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="Small"
        label="Small"
        small
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
      />
    </Card>
  </Wrapper>
);

export const Primary = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="Primary"
        label="Primary"
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        primary
      />
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

export const svgPrimary = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="svgPrimary"
        label="svgPrimary"
        svgPrimary
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
      />
    </Card>
  </Wrapper>
);

export const Gray = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="gray"
        label="gray"
        gray
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
      />
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

export const White = () => (
  <Wrapper>
    <Card>
      <div style={{ backgroundColor: '#909090' }}>
        <CardItem
          value="White"
          label="White"
          white
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </div>
    </Card>
  </Wrapper>
);

export const lbWhite = () => (
  <Wrapper>
    <Card>
      <div style={{ backgroundColor: '#909090' }}>
        <CardItem value="lbWhite" label="lbWhite" lbWhite />
      </div>
    </Card>
  </Wrapper>
);

export const valWhite = () => (
  <Wrapper>
    <Card>
      <div style={{ backgroundColor: '#909090' }}>
        <CardItem value="valWhite" label="valWhite" valWhite />
      </div>
    </Card>
  </Wrapper>
);

export const svgWhite = () => (
  <Wrapper>
    <Card>
      <div style={{ backgroundColor: '#909090' }}>
        <CardItem
          value="svgWhite"
          label="svgWhite"
          svgWhite
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </div>
    </Card>
  </Wrapper>
);

export const svgDefaultSizeFALSE = () => (
  <Wrapper>
    <Card>
      <CardItem
        value="Default"
        label="Default"
        svgDefaultSize={false}
        leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
      />
    </Card>
  </Wrapper>
);
