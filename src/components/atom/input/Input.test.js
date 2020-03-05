import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from './Input';

describe('Input', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Input placeholder="placeholder text" id="ipt" name="ipt" type="text" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
