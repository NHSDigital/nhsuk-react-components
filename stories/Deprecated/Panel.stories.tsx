import React from 'react';
import { Panel } from '../../src/deprecated';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Panel> = {
  title: 'Deprecated/Panel',
  component: Panel,
};
export default meta;
type Story = StoryObj<typeof Panel>;

export const Standard: Story = {
  render: (args) => (
    <Panel>
      <h3>Live Well</h3>
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <Panel label="Live well">
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ),
};

export const GreyPanel: Story = {
  render: (args) => (
    <Panel grey>
      <p>
        Advice, tips and tools to help you make the best choices about your health and wellbeing
      </p>
    </Panel>
  ),
};

export const PanelGroup: Story = {
  render: (args) => (
    <>
      <Panel.Group>
        <Panel>
          <h3>Eat well</h3>
          <p>All you need to know about the major food groups and a healthy, balanced diet</p>
        </Panel>
        <Panel>
          <h3>Healthy weight</h3>
          <p>
            Check your BMI using our healthy weight calculator and find out if you&apos;re a healthy
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
  ),
};
