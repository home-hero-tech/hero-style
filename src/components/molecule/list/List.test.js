import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import List from './List';
import ListItem from '../../atom/list-item/ListItem';

describe('List', () => {
  it('should match with the snapshot', () => {
    const children = (
      <ListItem>
        <div>Content</div>
      </ListItem>
    );
    const wrapper = shallow(<List>{children}</List>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
