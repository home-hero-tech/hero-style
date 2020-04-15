import React from 'react';

import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserHardHat } from '@fortawesome/pro-light-svg-icons';
import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Content from '../../helpers/content/Content';
import Input from '../../components/atom/input/Input';
import CardItem from '../../components/atom/card-item/CardItem';
import CardLine from '../../components/organism/card-line/CardLine';
import EmptyCardItem from '../../components/atom/empty-card-item/EmptyCardItem';
import Card from '../../components/molecule/card/Card';
import Collapse from '../../components/molecule/collapse/Collapse';
import Spacer from '../../components/molecule/spacer/Spacer';
import Line from '../../components/atom/line/Line';

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

export const ListAndSubListExample = () => {
  const renderList = (sub = false) => (
    <Spacer mtLg={3} mtMd={2}>
      <List>
        {!sub ? (
          <ListItem>
            <Spacer mbLg={2}>
              <EmptyCardItem>
                <Spacer mrLg={1} mrMd={1} mrSm={1} mrXs={1}>
                  <FontAwesomeIcon icon={faUserHardHat} />
                </Spacer>
                <Spacer mrLg={2} mrMd={2} mrSm={2} mrXs={2}>
                  Title
                </Spacer>
                <Line />
              </EmptyCardItem>
            </Spacer>
          </ListItem>
        ) : null}
        <ListItem>
          <CardLine small>
            {!sub ? (
              <EmptyCardItem style={{ padding: 0 }}>
                <Input
                  small
                  name="checked"
                  type="checkbox"
                  onChange={action('changing')}
                  value=""
                  checked
                />
              </EmptyCardItem>
            ) : null}
            <CardItem
              value="Value"
              label="Label"
              lg={2}
              md={6}
              sm={6}
              ellipsis
              small
            />
            <CardItem
              value="Value"
              label="Label"
              lg={6}
              md={6}
              sm={6}
              ellipsis
              small
            />
          </CardLine>
        </ListItem>
      </List>
    </Spacer>
  );
  return (
    <Wrapper style={{ maxWidth: '100%' }}>
      <List>
        <ListItem>
          <Card small>
            <EmptyCardItem style={{ padding: 0 }}>
              <Input
                small
                name="checked"
                type="checkbox"
                onChange={action('toggleCheck')}
                value=""
                checked
              />
            </EmptyCardItem>
            <CardItem
              value="Value"
              label="Label"
              lg={2}
              md={6}
              sm={6}
              ellipsis
              small
            />
            <CardItem
              value="Value"
              label="Label"
              lg={6}
              md={6}
              sm={6}
              ellipsis
              small
            />
            <EmptyCardItem lg={12}>
              <Collapse isOpen>{renderList(true)}</Collapse>
            </EmptyCardItem>
          </Card>
        </ListItem>
      </List>
    </Wrapper>
  );
};
