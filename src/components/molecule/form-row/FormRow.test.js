import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormRow from './FormRow';

describe('FormRow', () => {
  it('should match with the snapshot', () => {
    const children = 'FormRow';
    const wrapper = shallow(<FormRow>{children}</FormRow>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
