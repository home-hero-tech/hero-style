import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from './Modal';

describe('Modal', () => {
  it('should match with the snapshot', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root">
        <Modal
          open={isOpen}
          contentLabel="Modal"
          onConfirm={() => console.log('confirm')}
          onCancel={() => console.log('cancel')}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </Modal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
