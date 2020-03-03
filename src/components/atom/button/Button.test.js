import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
  it('should match with the snapshot', () => {
    const children = 'Button';
    const wrapper = shallow(<Button>{children}</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
