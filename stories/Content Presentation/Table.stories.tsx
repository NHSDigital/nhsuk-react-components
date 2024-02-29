import React from 'react';
import { Col, HintText, Row, Table } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'Content Presentation/Table',
  component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

Table.Head.displayName = 'Table.Head';
Table.Body.displayName = 'Table.Body';
Table.Row.displayName = 'Table.Row';
Table.Cell.displayName = 'Table.Cell';
Table.Panel.displayName = 'Table.Panel';

export const StandardTable: Story = {
  render: (args) => (
    <Table caption="Skin symptoms and possible causes">
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin Symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy blisters</Table.Cell>
          <Table.Cell>shingles, chickenpox</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const TablePanel: Story = {
  render: (args) => (
    <Table.Panel heading="Conditions similar to impetigo">
      <Table caption="Other possible causes of your symptoms">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Skin Symptoms</Table.Cell>
            <Table.Cell>Possible cause</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
            <Table.Cell>cold sores</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
            <Table.Cell>eczema</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Itchy blisters</Table.Cell>
            <Table.Cell>shingles, chickenpox</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Panel>
  ),
};

export const ResponsiveTable: Story = {
  args: { responsive: true },
  render: ({ responsive }) => (
    <Table responsive={responsive} caption="Ibuprofen syrup dosages for children">
      <Table.Head role="rowgroup">
        <Table.Row>
          <Table.Cell>Age</Table.Cell>
          <Table.Cell>How much?</Table.Cell>
          <Table.Cell>How often?</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>3 to 5 months (weighing more than 5kg)</Table.Cell>
          <Table.Cell>2.5ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>6 to 11 months</Table.Cell>
          <Table.Cell>2.5ml</Table.Cell>
          <Table.Cell>Max 3 to 4 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>1 to 3 years</Table.Cell>
          <Table.Cell>5ml</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const NumericCells: Story = {
  render: (args) => (
    <Row>
      <Col width="one-half">
        <HintText>Right-aligned cells are used for numeric values</HintText>
        <Table caption="Number of cases">
          <Table.Head>
            <Table.Row>
              <Table.Cell>Location</Table.Cell>
              <Table.Cell isNumeric>Number of cases</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>England</Table.Cell>
              <Table.Cell isNumeric>4,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Wales</Table.Cell>
              <Table.Cell isNumeric>2,500</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Scotland</Table.Cell>
              <Table.Cell isNumeric>600</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Col>
    </Row>
  ),
};
