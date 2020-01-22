/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../src';

const stories = storiesOf('Table', module);

stories
  .add('Standard', () => (
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
  ))
  .add('Table Panel', () => (
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
  ));

{
  /* <div class="nhsuk-table-responsive">
  <table class="nhsuk-table">
    <caption class="nhsuk-table__caption">Skin symptoms and possible causes</caption>
    <thead class="nhsuk-table__head">
      <tr class="nhsuk-table__row">
        <th class="nhsuk-table__header" scope="col">Skin symptoms</th>
        <th class="nhsuk-table__header" scope="col">Possible cause</th>
      </tr>
    </thead>
    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Blisters on lips or around the mouth</td>
        <td class="nhsuk-table__cell ">cold sores</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Itchy, dry, cracked, sore</td>
        <td class="nhsuk-table__cell ">eczema</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Itchy blisters</td>
        <td class="nhsuk-table__cell ">shingles, chickenpox</td>
      </tr>
    </tbody>
  </table>
</div> */
}
