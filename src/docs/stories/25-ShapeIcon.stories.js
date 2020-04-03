import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import ShapeAction from '../../components/atom/shape-action/ShapeAction';
import Spacer from '../../components/molecule/spacer/Spacer';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'ShapeAction',
  component: ShapeAction
};

export const Types = () => (
  <Wrapper>
    <ShapeAction>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="primary">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <Spacer inline>
      <ShapeAction type="danger">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeAction>
    </Spacer>
    <ShapeAction type="success">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
  </Wrapper>
);

export const Shapes = () => (
  <Wrapper>
    <ShapeAction type="primary" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="primary" shape="squared">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
  </Wrapper>
);

export const isButton = () => (
  <Wrapper>
    <ShapeAction type="primary" isButton>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>

    <ShapeAction type="danger" shape="rounded" isButton>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
  </Wrapper>
);

export const Fill = () => (
  <Wrapper>
    <ShapeAction type="primary" isButton fill="primary">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction isButton fill="success" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="primary" isButton fill="danger">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
  </Wrapper>
);

export const renderAction = () => (
  <Wrapper>
    <ShapeAction type="primary" isButton fill="primary" renderAction>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction isButton fill="success" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="primary" isButton fill="danger">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction isButton fill="primary" shape="rounded" size={3} isLink>
      <a href="www.google.com">
        <FontAwesomeIcon icon={faLayerGroup} />
      </a>
    </ShapeAction>
  </Wrapper>
);

export const sizes = () => (
  <Wrapper>
    <ShapeAction isButton fill="primary" shape="rounded" size={1}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="success" isButton size={2}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="danger" isButton fill="danger" size={3}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
    <ShapeAction type="primary" isButton shape="rounded" size={4}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeAction>
  </Wrapper>
);
