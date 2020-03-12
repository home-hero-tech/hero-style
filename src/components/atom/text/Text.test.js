import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Text from './Text';

describe('Text', () => {
  it('should match with the snapshot', () => {
    const children = 'Some information';
    const wrapper = shallow(<Text>{children}</Text>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
