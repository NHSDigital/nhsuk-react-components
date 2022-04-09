import React from 'react';
import { Card, Col, Container, Row } from '../../src';

export const Grid = (): JSX.Element => (
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
);

export default {
  title: 'Layout/Grid',
};
