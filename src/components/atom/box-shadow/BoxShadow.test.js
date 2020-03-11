import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import BoxShadow from './BoxShadow';

describe('BoxShadow', () => {
  it('should match with the snapshot', () => {
    const children = <div>BoxShadow</div>;
    const wrapper = shallow(<BoxShadow level={1}>{children}</BoxShadow>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
