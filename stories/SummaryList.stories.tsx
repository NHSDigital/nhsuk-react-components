/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { SummaryList, BodyText } from '../src';

const stories = storiesOf('Summary List', module);

stories
  .add('Standard', () => (
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ))
  .add('Without Actions', () => (
    <SummaryList>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ))
  .add('Without border', () => (
    <SummaryList noBorder>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Sarah Philips</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>5 January 1978</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          72 Guild Street
          <br />
          London
          <br />
          SE23 6FH
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <BodyText>07700 900457</BodyText>
          <BodyText>sarah.phillips@example.com</BodyText>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ));
