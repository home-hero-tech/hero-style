import React, { useState } from 'react';
import Pagination from '../../components/molecule/pagination/Pagination';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pagination',
  component: Pagination
};

export const Default = () => {
  function Parent({ children, ...props }) {
    const [state, setState] = useState();
    return <div>{children(state, setState)}</div>;
  }


  return (
    <Parent>
      {(state, setState) => {
        state = state || {page: 1};
        return (
          <Pagination
            activePage={state.page}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onClick={action('clicked')}
            onChange={page => setState({ page })}
          />
        )
      }}
    </Parent>
  )
};
