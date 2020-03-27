import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <ModalHeader title="Title" description="Description" />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
