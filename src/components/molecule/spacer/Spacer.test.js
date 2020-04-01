import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spacer from './Spacer';

describe('Spacer', () => {
  it('should match with the snapshot', () => {
    const children = <div>Information</div>;
    const wrapper = shallow(
      <Spacer mtLg={1} mtMd={1} mtSm={1} mtXs={1}>
        {children}
      </Spacer>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
