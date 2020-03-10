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

const Shadow = ({ level }) => (
  <Wrapper style={_wrapperStyle}>
    <BoxShadow level={level}>
      <div style={_boxStyle} />
    </BoxShadow>
  </Wrapper>
);

export const _4dp = () => <Shadow level={4} />;

export const _8dp = () => <Shadow level={8} />;

export const _16dp = () => <Shadow level={16} />;

export const _24dp = () => <Shadow level={24} />;

export const _32dp = () => <Shadow level={32} />;

export default {
  title: 'Shadow',
  component: BoxShadow
};

Shadow.propTypes = {
  level: PropTypes.number.isRequired
};
