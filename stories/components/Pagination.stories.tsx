import React from 'react';
import { Pagination } from '../../src';

export const Standard = (): JSX.Element => (
  <Pagination>
    <Pagination.Link previous href="/section/treatments">
      Treatments
    </Pagination.Link>
    <Pagination.Link next href="/section/symptoms">
      Symptoms
    </Pagination.Link>
  </Pagination>
);

export default {
  title: 'Components/Pagination',
  component: Pagination,
  subcomponents: { 'Pagination.Link': Pagination.Link },
};
