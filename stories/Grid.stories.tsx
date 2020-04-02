/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Row, Col, Panel, Container } from '../src';

const stories = storiesOf('Grid', module);

stories
  .addDecorator(centered)
  .add('Grid', () => (
    <Container>
      <Row>
        <Col width="full"><Panel>full column</Panel></Col>
      </Row>
      <Row>
        <Col width="one-half"><Panel>one-half column</Panel></Col>
        <Col width="one-half"><Panel>one-half column</Panel></Col>
      </Row>
      <Row>
        <Col width="one-third"><Panel>one-third column</Panel></Col>
        <Col width="one-third"><Panel>one-third column</Panel></Col>
        <Col width="one-third"><Panel>one-third column</Panel></Col>
      </Row>
      <Row>
        <Col width="one-quarter"><Panel>one-quarter column</Panel></Col>
        <Col width="one-quarter"><Panel>one-quarter column</Panel></Col>
        <Col width="one-quarter"><Panel>one-quarter column</Panel></Col>
        <Col width="one-quarter"><Panel>one-quarter column</Panel></Col>
      </Row>
    </Container>
  ));
