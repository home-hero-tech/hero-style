import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ModalContent from './ModalContent';

describe('ModalContent', () => {
  it('should match with the snapshot', () => {
    const children = <div>Content</div>;
    const wrapper = shallow(<ModalContent>{children}</ModalContent>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
