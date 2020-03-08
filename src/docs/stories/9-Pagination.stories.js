import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from '../../components/atom/pagination/Pagination';

export default {
  title: 'Pagination',
  component: Pagination
};

export const Default = () => (
  <Pagination
    activePage={1}
    itemsCountPerPage={10}
    totalItemsCount={450}
    pageRangeDisplayed={5}
    onClick={action('clicked')}
    onChange={action('changePage')}
  />
);
