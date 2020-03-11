import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<DatePicker selected={new Date('2020-03-11T10:41:40.597Z')} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
