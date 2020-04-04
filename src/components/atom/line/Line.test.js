import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Line from './Line';

describe('Line', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<Line />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
