import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ModalFooter from './ModalFooter';
import Button from '../../atom/button/Button';

describe('ModalFooter', () => {
  it('should match with the snapshot', () => {
    const children = (
      <>
        <Button onClick={() => {}}>1st action</Button>
        <Button onClick={() => {}} type="primary">
          2nd action
        </Button>
      </>
    );
    const wrapper = shallow(<ModalFooter>{children}</ModalFooter>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
