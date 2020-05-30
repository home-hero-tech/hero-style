import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import { Grid, Row } from 'react-flexbox-grid';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';
import CardBody from '../../components/atom/card-body/CardBody';

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
          <CardBody>
            <CardItem value="Default" label="Default" />
          </CardBody>
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const WithColumns = () => (
  <Grid fluid>
    <Card>
      <CardBody>
        <Row style={{ margin: 0 }}>
          <CardItem value="Default" label="Default" md={2} />
          <CardItem
            value="Default text long to break spaces with more text to realy break"
            label="Default"
            md={2}
            ellipsis
            tooltip="teste do tooltips"
          />
          <CardItem value="Default" label="Default" md={2} />
        </Row>
      </CardBody>
    </Card>
  </Grid>
);

export const LeftIcon = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="valGray"
          label="valGray"
          gray
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const Label = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardBody>
            <CardItem label="Default" />
          </CardBody>
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
          <CardBody>
            <CardItem value="Default" />
          </CardBody>
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const small = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem value="Small" label="Small" small />
      </CardBody>
    </Card>
  </Wrapper>
);

export const LabelSmall = () => (
  <Wrapper>
    <List>
      <ListItem>
        <Card>
          <CardBody>
            <CardItem label="Default" small />
          </CardBody>
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
          <CardBody>
            <CardItem value="Default" small />
          </CardBody>
        </Card>
      </ListItem>
    </List>
  </Wrapper>
);

export const smallSvg = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="Small"
          label="Small"
          small
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const Primary = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="Primary"
          label="Primary"
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
          primary
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const lbPrimary = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem value="lbPrimary" label="lbPrimary" lbPrimary />
      </CardBody>
    </Card>
  </Wrapper>
);

export const withCustomValueDisplay = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem label="Name" value="Primary" valPrimary />
      </CardBody>
    </Card>
    <br />
    <Card>
      <CardBody>
        <CardItem label="Name" value="Success" valSuccess />
      </CardBody>
    </Card>
  </Wrapper>
);

export const svgPrimary = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="svgPrimary"
          label="svgPrimary"
          svgPrimary
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const Gray = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="gray"
          label="gray"
          gray
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const lbGray = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem value="lbGray" label="lbGray" lbGray />
      </CardBody>
    </Card>
  </Wrapper>
);

export const White = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <div style={{ backgroundColor: '#909090' }}>
          <CardItem
            value="White"
            label="White"
            white
            leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
          />
        </div>
      </CardBody>
    </Card>
  </Wrapper>
);

export const lbWhite = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <div style={{ backgroundColor: '#909090' }}>
          <CardItem value="lbWhite" label="lbWhite" lbWhite />
        </div>
      </CardBody>
    </Card>
  </Wrapper>
);

export const valWhite = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <div style={{ backgroundColor: '#909090' }}>
          <CardItem value="valWhite" label="valWhite" valWhite />
        </div>
      </CardBody>
    </Card>
  </Wrapper>
);

export const svgWhite = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <div style={{ backgroundColor: '#909090' }}>
          <CardItem
            value="svgWhite"
            label="svgWhite"
            svgWhite
            leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
          />
        </div>
      </CardBody>
    </Card>
  </Wrapper>
);

export const svgDefaultSizeFALSE = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          value="Default"
          label="Default"
          svgDefaultSize={false}
          leftIcon={<FontAwesomeIcon icon={faLayerGroup} />}
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const withHref = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          label="Endereço"
          value="Home hero"
          href="https://homehero.com.br/?interno"
        />
      </CardBody>
    </Card>
  </Wrapper>
);

export const withHtml = () => (
  <Wrapper>
    <Card>
      <CardBody>
        <CardItem
          label="Endereço"
          value={`<h1>Home Hero</h1>
              <p> teste</p>
            `}
          html
        />
      </CardBody>
    </Card>
  </Wrapper>
);
