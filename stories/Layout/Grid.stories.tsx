import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Card, Col, Container, Row } from 'nhsuk-react-components';

const meta: Meta = {
  title: 'Layout/Grid',
};
export default meta;

export const Grid: StoryObj = {
  render: (args) => (
    <Container>
      <Row>
        <Col width="full">
          <Card>full column</Card>
        </Col>
      </Row>
      <Row>
        <Col width="one-half">
          <Card>one-half column</Card>
        </Col>
        <Col width="one-half">
          <Card>one-half column</Card>
        </Col>
      </Row>
      <Row>
        <Col width="one-third">
          <Card>one-third column</Card>
        </Col>
        <Col width="one-third">
          <Card>one-third column</Card>
        </Col>
        <Col width="one-third">
          <Card>one-third column</Card>
        </Col>
      </Row>
      <Row>
        <Col width="one-quarter">
          <Card>one-quarter column</Card>
        </Col>
        <Col width="one-quarter">
          <Card>one-quarter column</Card>
        </Col>
        <Col width="one-quarter">
          <Card>one-quarter column</Card>
        </Col>
        <Col width="one-quarter">
          <Card>one-quarter column</Card>
        </Col>
      </Row>
    </Container>
  ),
};
