import React from 'react';
import { Row, Col, Panel, Container } from '../src';


export const Grid = () => (
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
);

export default {
  title: 'Components/Grid',

};
