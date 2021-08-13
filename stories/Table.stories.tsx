import React from 'react';
import { Col, Hint, Row, Table } from '../src';

export const StandardTable = (): JSX.Element => (
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
);

export const TablePanel = (): JSX.Element => (
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
);

export const ResponsiveTable = (): JSX.Element => (
  <Table responsive caption="Ibuprofen syrup dosages for children">
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
);

export const NumericCells = () => (
  <Row>
    <Col width="one-half">
      <Hint>Right-aligned cells are used for numeric values</Hint>
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
);

export default {
  title: 'Components/Table',
  component: Table,
};
