import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from './Form';
import FormRow from '../../molecule/form-row/FormRow';
import FormGroup from '../../molecule/form-group/FormGroup';

describe('Form', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <Form onSubmit={() => {}}>
        <FormRow>
          <FormGroup
            placeholder="placeholder text"
            id="ipt"
            name="ipt"
            type="text"
            label="Text"
            message="Default message"
          />
        </FormRow>
      </Form>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
