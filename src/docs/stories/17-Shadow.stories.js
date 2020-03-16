import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../../helpers/wrapper/Wrapper';
import BoxShadow from '../../components/atom/box-shadow/BoxShadow';

const _wrapperStyle = {
  maxWidth: '500px',
  margin: '20px'
};

const _boxStyle = {
  height: '50px',
  backgroundColor: 'rgb(0, 148, 255)',
  borderRadius: '4px'
};

const Shadow = props => (
  <Wrapper style={_wrapperStyle}>
    <BoxShadow {...props}>
      <div style={_boxStyle} />
    </BoxShadow>
  </Wrapper>
);

export const _1 = () => <Shadow level={1} />;

export const _2 = () => <Shadow level={2} />;

export const _3 = () => <Shadow level={3} />;

export const _4 = () => <Shadow level={4} />;

export const _5 = () => <Shadow level={5} />;

export default {
  title: 'Shadow',
  component: BoxShadow
};

Shadow.propTypes = {
  level: PropTypes.number.isRequired
};
