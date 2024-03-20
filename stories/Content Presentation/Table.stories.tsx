import React from 'react';
import { Col, HintText, Row, Table } from '../../src';
import TableHead from '../../src/components/content-presentation/table/components/TableHead';
import TableRow from '../../src/components/content-presentation/table/components/TableRow';
import TableCell from '../../src/components/content-presentation/table/components/TableCell';
import TableBody from '../../src/components/content-presentation/table/components/TableBody';
import TablePanel from '../../src/components/content-presentation/table/components/TablePanel';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Table> = {
  title: 'Content Presentation/Table',
  component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TablePanel.displayName = 'Table.Panel';

export const StandardTable: Story = {
  render: (args) => (
    <Table caption="Skin symptoms and possible causes">
      <TableHead>
        <TableRow>
          <TableCell>Skin Symptoms</TableCell>
          <TableCell>Possible cause</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Blisters on lips or around the mouth</TableCell>
          <TableCell>cold sores</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Itchy, dry, cracked, sore</TableCell>
          <TableCell>eczema</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Itchy blisters</TableCell>
          <TableCell>shingles, chickenpox</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Had to rename this as it conflicts with the imported component TablePanel. Not sure what the best solution is for this.
export const PanelTable: Story = {
  render: (args) => (
    <TablePanel heading="Conditions similar to impetigo">
      <Table caption="Other possible causes of your symptoms">
        <TableHead>
          <TableRow>
            <TableCell>Skin Symptoms</TableCell>
            <TableCell>Possible cause</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Blisters on lips or around the mouth</TableCell>
            <TableCell>cold sores</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Itchy, dry, cracked, sore</TableCell>
            <TableCell>eczema</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Itchy blisters</TableCell>
            <TableCell>shingles, chickenpox</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TablePanel>
  ),
};

export const ResponsiveTable: Story = {
  args: { responsive: true },
  render: ({ responsive }) => (
    <Table responsive={responsive} caption="Ibuprofen syrup dosages for children">
      <TableHead role="rowgroup">
        <TableRow>
          <TableCell>Age</TableCell>
          <TableCell>How much?</TableCell>
          <TableCell>How often?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>3 to 5 months (weighing more than 5kg)</TableCell>
          <TableCell>2.5ml</TableCell>
          <TableCell>Max 3 times in 24 hours</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>6 to 11 months</TableCell>
          <TableCell>2.5ml</TableCell>
          <TableCell>Max 3 to 4 times in 24 hours</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1 to 3 years</TableCell>
          <TableCell>5ml</TableCell>
          <TableCell>Max 3 times in 24 hours</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const NumericCells: Story = {
  render: (args) => (
    <Row>
      <Col width="one-half">
        <HintText>Right-aligned cells are used for numeric values</HintText>
        <Table caption="Number of cases">
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell isNumeric>Number of cases</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>England</TableCell>
              <TableCell isNumeric>4,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wales</TableCell>
              <TableCell isNumeric>2,500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Scotland</TableCell>
              <TableCell isNumeric>600</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Col>
    </Row>
  ),
};