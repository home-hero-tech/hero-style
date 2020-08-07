import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from './Modal';

describe('Modal', () => {
  it('should match with the snapshot', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root" className="root">
        <Modal open={isOpen} contentLabel="Default Modal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </Modal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *right* props', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root" className="root">
        <Modal open={isOpen} contentLabel="Default Modal" right>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </Modal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *left* props', () => {
    const isOpen = true;

    const wrapper = shallow(
      <div id="root" className="root">
        <Modal open={isOpen} contentLabel="Default Modal" left>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vitae!
        </Modal>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
