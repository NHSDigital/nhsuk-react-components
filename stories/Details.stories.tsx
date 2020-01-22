/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Details } from '../src';

const stories = storiesOf('Details', module);

stories
  .add('Standard', () => (
    <Details>
      <Details.Summary>Where can I find my NHS number?</Details.Summary>
      <Details.Text>
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number on any document sent to you by the NHS. This may include:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
          <li>your NHS medical card</li>
        </ul>
        <p>Ask your GP practice for help if you can't find your NHS number.</p>
      </Details.Text>
    </Details>
  ))
  .add('Expander', () => (
    <Details expander>
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <table>
          <tbody>
            <tr>
              <th>
                <strong>Day of the week</strong>
              </th>
              <th>
                <strong>Opening hours</strong>
              </th>
            </tr>
            <tr>
              <th>Monday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>9am to 1pm</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </Details.Text>
    </Details>
  ))
  .add('Expander Grouo', () => (
    <Details.ExpanderGroup>
      <Details expander>
        <Details.Summary>How to measure your blood glucose levels</Details.Summary>
        <Details.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be uncomfortable. It does
            get better.
          </p>
          <p>You would have been given:</p>
          <ul>
            <li>a blood glucose metre</li>
            <li>small needles called lancets</li>
            <li>a plastic pen to hold the lancest</li>
            <li>small test strips</li>
          </ul>
        </Details.Text>
      </Details>
      <Details expander>
        <Details.Summary>When to check your blood glucose level</Details.Summary>
        <Details.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re affected by meals
            and exercise. It should help you have more stable blood glucose levels.
          </p>
        </Details.Text>
      </Details>
    </Details.ExpanderGroup>
  ));
