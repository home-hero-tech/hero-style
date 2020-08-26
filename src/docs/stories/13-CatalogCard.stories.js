import React from 'react';
import { Row } from 'react-flexbox-grid';
import CatalogCard from '../../components/molecule/catalog-card/CatalogCard';

const data = {
  id: 47,
  name: 'Banheiros',
  url: '/data',
  // imgUrl: 'Fornitures.png',
  imgUrl: 'Fornitures.png',
  hasChildren: true,
  children: [
    { name: 'Sala de visitas', url: '/sala-visitas' },
    { name: 'Sala de Jantar' },
    { name: 'Quartos', url: '' },
    { name: 'Escritório em Casa', url: '' },
    { name: 'Exterior', url: '' },
    { name: 'Banheiro', url: '' }
  ],
  alt: '',
  imageLink: ''
};

// eslint-disable-next-line react/prop-types
const LinkComponent = ({ className, key, to, children }) => (
  <a className={className} key={key} href={to}>
    {children}
  </a>
);

export default {
  title: 'CatalogCard',
  component: CatalogCard
};

export const Default = () => (
  <Row style={{ marginLeft: '30px' }}>
    <CatalogCard data={data} pathname="/" LinkComponent={LinkComponent} />
  </Row>
);
export const DefaulCustomCol = () => (
  <Row style={{ marginLeft: '30px' }}>
    <CatalogCard xs={6} data={data} pathname="/" LinkComponent={LinkComponent} />
  </Row>
);
export const withoutItem = () => {
  const newData = { ...data, children: [] };

  return (
    <Row style={{ marginLeft: '30px' }}>
      <CatalogCard xs={2} data={newData} pathname="/" LinkComponent={LinkComponent} />
    </Row>
  );
};
export const withoutItemCustomCol = () => {
  const newData = { ...data, children: [] };

  return (
    <Row style={{ marginLeft: '30px' }}>
      <CatalogCard xs={6} data={newData} pathname="/" LinkComponent={LinkComponent} />
    </Row>
  );
};

export const WithoutTile = () => {
  const newData = { ...data, name: '' };

  return (
    <Row style={{ marginLeft: '30px' }}>
      <CatalogCard data={newData} pathname="/" LinkComponent={LinkComponent} />
    </Row>
  );
};

export const WithoutImageWithItems = () => {
  const newData = { ...data, imgUrl: '' };

  return (
    <Row style={{ marginLeft: '30px' }}>
      <CatalogCard data={newData} pathname="/" LinkComponent={LinkComponent} />
    </Row>
  );
};
export const WithoutImageWithoutItems = () => {
  const newData = { ...data, children: [], imgUrl: '' };

  return (
    <Row style={{ marginLeft: '30px' }}>
      <CatalogCard data={newData} pathname="/" LinkComponent={LinkComponent} />
    </Row>
  );
};
