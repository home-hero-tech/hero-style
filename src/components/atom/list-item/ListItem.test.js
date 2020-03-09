import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListItem from './ListItem';

describe('ListItem', () => {
  it('should match with the snapshot', () => {
    const children = <div>Content</div>;
    const wrapper = shallow(<ListItem>{children}</ListItem>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
