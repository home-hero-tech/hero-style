import React from 'react';
import { action } from '@storybook/addon-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/pro-light-svg-icons';

import Wrapper from '../../helpers/wrapper/Wrapper';
import Dropdown from '../../components/atom/dropdown/Dropdown';
import DropdownMenu from '../../components/atom/dropdown-menu/DropdownMenu';
import List from '../../components/molecule/list/List';
import ListItem from '../../components/atom/list-item/ListItem';
import Button from '../../components/atom/button/Button';

export default {
  title: 'Dropdown',
  component: Dropdown
};

export const Above = () => (
  <Wrapper style={{margin: '100px'}}>
  <Dropdown>
    <DropdownMenu above>
      <List>
        <ListItem>
          <Button type="default" container="text" onClick={action('clicked')}>Açao 1</Button>
        </ListItem>
         <ListItem>
          <Button type="default" container="text" onClick={action('clicked 2')}>Açao 2</Button>
        </ListItem>
         <ListItem>
          <Button type="default" container="text" onClick={action('clicked 3')}>Açao 3</Button>
        </ListItem>
      </List>
    </DropdownMenu>
    <FontAwesomeIcon icon={faEllipsisV} />
  </Dropdown>
  </Wrapper>
);

export const Below = () => (
  <Wrapper style={{margin: '100px'}}>
  <Dropdown>
    <DropdownMenu below>
      <List>
        <ListItem>
          <Button type="default" container="text" onClick={action('clicked')}>Açao 1</Button>
        </ListItem>
         <ListItem>
          <Button type="default" container="text" onClick={action('clicked 2')}>Açao 2</Button>
        </ListItem>
         <ListItem>
          <Button type="default" container="text" onClick={action('clicked 3')}>Açao 3</Button>
        </ListItem>
      </List>
    </DropdownMenu>
    <FontAwesomeIcon icon={faEllipsisV} />
  </Dropdown>
  </Wrapper>
);