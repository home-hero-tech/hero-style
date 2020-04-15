import React from 'react';
import { action } from '@storybook/addon-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/pro-light-svg-icons';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Dropdown from '../../components/molecule/dropdown/Dropdown';
import DropdownMenu from '../../components/molecule/dropdown-menu/DropdownMenu';
import List from '../../components/molecule/list/List';
import ListItem from '../../components/atom/list-item/ListItem';
import Button from '../../components/atom/button/Button';
import ShapeIcon from '../../components/atom/shape-action/ShapeAction';

export default {
  title: 'Dropdown',
  component: Dropdown
};

export const Above = () => (
  <Wrapper style={{ margin: '100px' }}>
    <Dropdown>
      <DropdownMenu above>
        <List>
          <ListItem>
            <Button type="default" container="text" onClick={action('clicked')}>
              Açao 1
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 2')}
            >
              Açao 2
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 3')}
            >
              Açao 3
            </Button>
          </ListItem>
        </List>
      </DropdownMenu>
      <ShapeIcon type="primary">
        <FontAwesomeIcon icon={faEllipsisV} />
      </ShapeIcon>
    </Dropdown>
  </Wrapper>
);

export const Below = () => (
  <Wrapper style={{ margin: '100px' }}>
    <Dropdown>
      <DropdownMenu below>
        <List>
          <ListItem>
            <Button type="default" container="text" onClick={action('clicked')}>
              Açao 1
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 2')}
            >
              Açao 2
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 3')}
            >
              Açao 3
            </Button>
          </ListItem>
        </List>
      </DropdownMenu>
      <ShapeIcon type="primary">
        <FontAwesomeIcon icon={faEllipsisV} />
      </ShapeIcon>
    </Dropdown>
  </Wrapper>
);

export const Before = () => (
  <Wrapper style={{ margin: '100px' }}>
    <Dropdown>
      <DropdownMenu below before>
        <List>
          <ListItem>
            <Button type="default" container="text" onClick={action('clicked')}>
              Açao 1
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 2')}
            >
              Açao 2
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type="default"
              container="text"
              onClick={action('clicked 3')}
            >
              Açao 3
            </Button>
          </ListItem>
        </List>
      </DropdownMenu>
      <ShapeIcon type="primary">
        <FontAwesomeIcon icon={faEllipsisV} />
      </ShapeIcon>
    </Dropdown>
  </Wrapper>
);
