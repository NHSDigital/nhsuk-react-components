import React from 'react';
import { InsetText } from '../../src';

export const Standard = (): JSX.Element => (
  <InsetText>
    <p>
      You can report any suspected side effect to the{' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export const WithCustomHiddenText = (): JSX.Element => (
  <InsetText visuallyHiddenText="Hidden Text: ">
    <p>
      You can report any suspected side effect to the{' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export const WithDisabledHiddenText = (): JSX.Element => (
  <InsetText visuallyHiddenText={false}>
    <p>
      You can report any suspected side effect to the{' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export default {
  title: 'Typography/InsetText',
  component: InsetText,
};
