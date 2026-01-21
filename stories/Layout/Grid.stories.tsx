import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Col, Container, Row } from '#components/layout/index.js';
import { Card } from '#components/navigation/card/index.js';

const meta: Meta = {
  title: 'Layout/Grid',
  parameters: {
    layout: 'fullscreen',
    width: false,
  },
};
export default meta;

export const Grid: StoryObj = {
  render: (args) => (
    <Container>
      <main className="nhsuk-main-wrapper" id="maincontent">
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
      </main>
    </Container>
  ),
};
