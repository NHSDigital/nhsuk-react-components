import React from 'react';
import { Col, Row, Table } from '../src';

export const StandardTable = () => (
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

export const TablePanel = () => (
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

export const NumericTable = () => (
  <Row>
    <Col width="two-thirds">
      <Table caption="Number of cases">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Location</Table.Cell>
            <Table.Cell>Number of cases</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>England</Table.Cell>
            <Table.Cell isNumeric>4000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Wales</Table.Cell>
            <Table.Cell isNumeric>2500</Table.Cell>
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
