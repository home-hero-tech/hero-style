import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loader from './Loader';

describe('Loader', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(<Loader text="Loading" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
