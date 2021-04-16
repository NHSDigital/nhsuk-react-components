import React from 'react';
import { InsetText } from '../src';

export const Standard = () => (
  <InsetText>
    <p>
      You can report any suspected side effect to the
      {' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export const WithCustomHiddenText = () => (
  <InsetText visuallyHiddenText="Hidden Text: ">
    <p>
      You can report any suspected side effect to the
      {' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export const WithDisabledHiddenText = () => (
  <InsetText visuallyHiddenText={false}>
    <p>
      You can report any suspected side effect to the
      {' '}
      <a href="https://yellowcard.mhra.gov.uk/" title="External website">
        UK safety scheme
      </a>
      .
    </p>
  </InsetText>
);

export default {
  title: 'Components/InsetText',
  component: InsetText,
};
