/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { CareCard } from '../src';

const stories = storiesOf('CareCard', module);

stories
  .add('Non-Urgent', () => (
    <CareCard type="non-urgent">
      <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you're not sure it's chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you're concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it's chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
  ))
  .add('Urgent', () => (
    <CareCard type="urgent">
      <CareCard.Heading>Ask for an urgent GP appointment if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you're an adult and have chickenpox</li>
          <li>
            you're pregnant and haven't had chickenpox before and you've been near someone with it
          </li>
          <li>you have a weakened immune system and you've been near someone with chickenpox</li>
          <li>you think your newborn baby has chickenpox</li>
        </ul>
        <p>
          In these situations, your GP can prescribe medicine to prevent complications. You need to
          take it within 24 hours of the spots coming out.
        </p>
      </CareCard.Content>
    </CareCard>
  ))
  .add('Immediate', () => (
    <CareCard type="immediate">
      <CareCard.Heading>Call 999 if you have sudden chest pain that:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>spreads to your arms, back, neck or jaw</li>
          <li>makes your chest feel tight or heavy</li>
          <li>also started with shortness of breath, sweating and feeling or being sick</li>
        </ul>
        <p>
          You could be having a heart attack. Call 999 immediately as you need immediate treatment
          in hospital.
        </p>
      </CareCard.Content>
    </CareCard>
  ))
  .add('Without Visually Hidden Text', () => (
    <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText={false}>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you're not sure it's chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you're concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it's chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
  ))
  .add('With Custom Visually Hidden Text', () => (
    <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText="Custom Hidden Text">Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you're not sure it's chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you're concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it's chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
  ));
