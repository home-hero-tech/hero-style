import React from 'react';
import Slider from '../../components/molecule/slider/Slider';
import Card from '../../components/molecule/card/Card';
import CardHeader from '../../components/atom/card-header/CardHeader';
import CardBody from '../../components/atom/card-body/CardBody';

export default {
  title: 'Slider',
  component: Slider
};

const renderCard = item => (
  <Card>
    <CardHeader>Header {item}</CardHeader>
    <CardBody>Conteúdo do card numero {item}</CardBody>
  </Card>
);

export const Default = () => {
  return <Slider style={{ maxWidth: 800, margin: '0 auto' }}>{[1, 2, 3, 4, 5, 6].map(renderCard)}</Slider>;
};
