import React from 'react';
import { action } from '@storybook/addon-actions';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CardHeader from '../../components/atom/card-header/CardHeader';
import CardBody from '../../components/atom/card-body/CardBody';
import CardFooter from '../../components/atom/card-footer/CardFooter';
import Card from '../../components/molecule/card/Card';
import CardItem from '../../components/atom/card-item/CardItem';
import Button from '../../components/atom/button/Button';
import Spacer from '../../components/molecule/spacer/Spacer';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Input from '../../components/atom/input/Input';

export default {
  title: 'Card',
  component: Card
};

export const Default = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <Card>
      <CardBody>
        <p>Default Card</p>
      </CardBody>
    </Card>
  </Wrapper>
);

export const WithHeader = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <Card>
      <CardHeader>Card Header</CardHeader>
      <CardBody>
        <p>Card with Header</p>
      </CardBody>
    </Card>
  </Wrapper>
);

export const WithFooter = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <Card>
      <CardHeader>Card Header</CardHeader>
      <CardBody>
        <p style={{ height: 70 }}>Card with Footer</p>
      </CardBody>
      <CardFooter>
        <Row end="xs">
          <Button type="primary">Confirm</Button>
        </Row>
      </CardFooter>
    </Card>
  </Wrapper>
);

export const WithCardItems = () => (
  <Wrapper style={{ maxWidth: '100%', marginTop: 10 }}>
    <Grid fluid>
      <Card>
        <CardBody>
          <Row>
            <Col xs={11}>
              <Row middle="xs">
                <Col>
                  <Spacer mrLg={2} mrMd={2}>
                    <Input
                      id="ipt"
                      name="ipt"
                      type="checkbox"
                      defaultChecked
                      value="1"
                      onChange={action('toggleCheck')}
                    />
                  </Spacer>
                </Col>
                <CardItem label="#" value="1" />
                <CardItem label="Status" value="Ativo" />
                <CardItem label="Nome" value="Matheus Alexandre" />
                <CardItem label="Criado em" value="04 de Set 2019 às 13:58" />
                <CardItem label="Atualizado em" value="04 de Set 2019 às 13:58" />
              </Row>
            </Col>
            <Col xs="1">actions</Col>
          </Row>
        </CardBody>
      </Card>
    </Grid>
  </Wrapper>
);

export const Borderless = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <Card border={false}>
      <CardHeader>Card Header</CardHeader>
      <CardBody>
        <p>Borderless Card</p>
      </CardBody>
    </Card>
  </Wrapper>
);

export const Small = () => (
  <Wrapper style={{ maxWidth: 800, marginTop: 10 }}>
    <Card>
      <CardBody size="small">
        <p>Small Card</p>
      </CardBody>
    </Card>
  </Wrapper>
);
