import React from 'react';
import { Table } from '../src';

export const StandardTable = () => (
  <Table.Container>
    <Table>
      <Table.Caption>Skin symptoms and possible causes</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
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
  </Table.Container>
);

export const TablePanel = () => (
  <Table.Panel heading="Conditions similar to impetigo">
    <Table>
      <Table.Caption>Other possible causes of your symptoms</Table.Caption>
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

export const ResponsiveTable = () => (
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
    </Table.Body>
    <Table.Body>
      <Table.Row>
        <Table.Cell>6 to 11 months</Table.Cell>
        <Table.Cell>2.5ml</Table.Cell>
        <Table.Cell>Max 3 to 4 times in 24 hours</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Body>
      <Table.Row>
        <Table.Cell>1 to 3 years</Table.Cell>
        <Table.Cell>5ml</Table.Cell>
        <Table.Cell>Max 3 times in 24 hours</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default {
  title: 'Components/Table',
  component: Table,
};
