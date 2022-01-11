import React from 'react';
import { Fieldset } from '../../src';

export const Standard = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend>What is your address?</Fieldset.Legend>
  </Fieldset>
);

export const AsAPageHeading = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
  </Fieldset>
);

export const WithCustomLegendSize = (): JSX.Element => (
  <Fieldset>
    <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
  </Fieldset>
);

export default {
  title: 'Forms/Fieldset',
  component: Fieldset,
};
