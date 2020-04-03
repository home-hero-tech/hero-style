import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';

import ShapeAction from './ShapeAction';

describe('ShapeAction', () => {
  it('should match with the snapshot', () => {
    const wrapper = shallow(
      <ShapeAction>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *type* props equals primary', () => {
    const wrapper = shallow(
      <ShapeAction type="primary">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *type* props equals success', () => {
    const wrapper = shallow(
      <ShapeAction type="success">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *type* props equals danger', () => {
    const wrapper = shallow(
      <ShapeAction type="danger">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *shape* props equals rounded', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="rounded">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *shape* props equals squared', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *fill* props equals primary', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="primary">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *fill* props equals success', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="success">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *fill* props equals danger', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *isButton* props equals true', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" isButton>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *isLink* props equals true', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" isLink>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *size* props equals 1', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" size={1}>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *size* props equals 2', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" size={2}>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *size* props equals 3', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" size={3}>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match with the *size* props equals 4', () => {
    const wrapper = shallow(
      <ShapeAction type="primary" shape="squared" fill="danger" size={4}>
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
