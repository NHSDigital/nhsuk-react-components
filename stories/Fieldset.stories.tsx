import React from 'react';
import { Fieldset } from '../src';

export const Standard = () => (
  <Fieldset>
    <Fieldset.Legend>What is your address?</Fieldset.Legend>
  </Fieldset>
);


export const AsAPageHeading = () => (
  <Fieldset>
    <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
  </Fieldset>
);

export const WithCustomLegendSize = () => (
  <Fieldset>
    <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
  </Fieldset>
);

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
};
