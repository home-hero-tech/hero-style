import React from 'react';
import { shallow } from 'enzyme';
import { action } from '@storybook/addon-actions';
import toJson from 'enzyme-to-json';

import FormActions from './FormActions';
import Button from '../../atom/button/Button';

describe('FormActions', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <FormActions>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <FormActions alignBetween>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <FormActions alignEnd>
        <Button type="submit">Submit</Button>
        <Button onClick={action('cancel')}>Cancel</Button>
      </FormActions>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
