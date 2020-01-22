/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from '../src';

const stories = storiesOf('Panel', module);

stories
  .add('Standard', () => (
    <Panel>
      <h3>Live Well</h3>
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ))
  .add('With a label', () => (
    <Panel label="Live well">
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ))
  .add('Grey', () => (
    <Panel grey>
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ))
  .add('Panel Group', () => (
    <>
      <Panel.Group>
        <Panel>
          <h3>Eat well</h3>
          <p>All you need to know about the major food groups and a healthy, balanced diet</p>
        </Panel>
        <Panel>
          <h3>Healthy weight</h3>
          <p>
            Check your BMI using our healthy weight calculator and find out if you're a healthy
            weight
          </p>
        </Panel>
      </Panel.Group>
      <Panel.Group>
        <Panel>
          <h3>Excercise</h3>
          <p>
            Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
          </p>
        </Panel>
        <Panel>
          <h3>Sleep and tiredness</h3>
          <p>
            Find out how to sleep well and the common lifestyle factors that are making you tired
          </p>
        </Panel>
      </Panel.Group>
    </>
  ));
