import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/pro-light-svg-icons';
import ShapeIcon from '../../components/atom/shape-action/ShapeAction';
import Spacer from '../../components/molecule/spacer/Spacer';

import Wrapper from '../../helpers/wrapper/Wrapper';

export default {
  title: 'RoundIcon',
  component: ShapeIcon
};

export const Types = () => (
  <Wrapper>
    <ShapeIcon type="primary">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <Spacer inline>
      <ShapeIcon type="danger">
        <FontAwesomeIcon icon={faLayerGroup} />
      </ShapeIcon>
    </Spacer>
    <ShapeIcon type="success">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
  </Wrapper>
);

export const Shapes = () => (
  <Wrapper>
    <ShapeIcon type="primary" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="primary" shape="squared">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
  </Wrapper>
);

export const isButton = () => (
  <Wrapper>
    <ShapeIcon type="primary" isButton>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>

    <ShapeIcon type="danger" shape="rounded" isButton>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
  </Wrapper>
);

export const Fill = () => (
  <Wrapper>
    <ShapeIcon type="primary" isButton fill="primary">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon isButton fill="success" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="primary" isButton fill="danger">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
  </Wrapper>
);

export const renderAction = () => (
  <Wrapper>
    <ShapeIcon type="primary" isButton fill="primary" renderAction>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon isButton fill="success" shape="rounded">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="primary" isButton fill="danger">
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon isButton fill="primary" shape="rounded" size={3} isLink>
      <a href="www.google.com">
        <FontAwesomeIcon icon={faLayerGroup} />
      </a>
    </ShapeIcon>
  </Wrapper>
);

export const sizes = () => (
  <Wrapper>
    <ShapeIcon isButton fill="primary" shape="rounded" size={1}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="success" isButton size={2}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="danger" isButton fill="danger" size={3}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
    <ShapeIcon type="primary" isButton shape="rounded" size={4}>
      <FontAwesomeIcon icon={faLayerGroup} />
    </ShapeIcon>
  </Wrapper>
);
