import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../../components/atom/list-item/ListItem';
import List from '../../components/molecule/list/List';

export default {
  title: 'List',
  component: List
};

const _style = {
  maxWidth: '500px',
  margin: '20px'
};

const Wrapper = ({ children }) => <div style={_style}>{children}</div>;

export const DefaultList = () => (
  <Wrapper>
    <List>
      <ListItem>
        <div>Content</div>
      </ListItem>
      <ListItem>
        <div>Content</div>
      </ListItem>
      <ListItem>
        <div>Content</div>
      </ListItem>
    </List>
  </Wrapper>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Wrapper.defaultProps = {
  children: null
};
