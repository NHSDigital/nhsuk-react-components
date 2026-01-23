import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Table } from '#components/content-presentation/table/index.js';
import { Card } from '#components/navigation/card/index.js';

const meta: Meta<typeof Table> = {
  title: 'Content Presentation/Table',
  component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

export const StandardTable: Story = {
  args: {
    caption: 'Skin symptoms and possible causes',
  },
  render: (args) => (
    <Table {...args}>
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

export const TableCard: Story = {
  args: {
    caption: 'Impetigo can look similar to other skin conditions',
  },
  render: (args) => (
    <Card feature>
      <Card.Heading>Other conditions like impetigo</Card.Heading>
      <Table {...args}>
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
    </Card>
  ),
};

export const ResponsiveTable: Story = {
  args: {
    caption: 'Ibuprofen syrup dosages for children',
    responsive: true,
  },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
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

export const ResponsiveTableWithCustomHTML: Story = {
  args: {
    caption: 'Skin symptoms and possible causes',
  },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Type</Table.Cell>
          <Table.Cell>Description</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>id</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>The ID of the table.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>rows</Table.Cell>
          <Table.Cell>array</Table.Cell>
          <Table.Cell>
            <strong>Required.</strong> The rows within the table component.{' '}
            <a href="#/macro-options">See macro options for rows</a>.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>head</Table.Cell>
          <Table.Cell>array</Table.Cell>
          <Table.Cell>
            Can be used to add a row of table header cells (
            <code className="app-code">&lt;th&gt;</code>) at the top of the table component.{' '}
            <a href="#/macro-options">See macro options for head</a>.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>caption</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>Caption text.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>captionClasses</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>
            Classes for caption text size. Classes should correspond to the available typography
            heading classes.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>firstCellIsHeader</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>
            If set to <code className="app-code">true</code>, the first cell in each row will be a
            table header (<code className="app-code">&lt;th&gt;</code>).
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>classes</Table.Cell>
          <Table.Cell>string</Table.Cell>
          <Table.Cell>Classes to add to the table container.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>attributes</Table.Cell>
          <Table.Cell>object</Table.Cell>
          <Table.Cell>
            HTML attributes (for example data attributes) to add to the table container.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const FirstCellAsHeader: Story = {
  args: {
    firstCellIsHeader: true,
  },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Day of the week</Table.Cell>
          <Table.Cell>Opening hours</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>9am to 6pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tuesday</Table.Cell>
          <Table.Cell>9am to 6pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wednesday</Table.Cell>
          <Table.Cell>9am to 6pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Thursday</Table.Cell>
          <Table.Cell>9am to 6pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Friday</Table.Cell>
          <Table.Cell>9am to 6pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Saturday</Table.Cell>
          <Table.Cell>9am to 1pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sunday</Table.Cell>
          <Table.Cell>Closed</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const NumericCells: Story = {
  args: {
    caption: 'Number of cases',
  },
  render: (args) => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Location</Table.Cell>
          <Table.Cell format="numeric">Number of cases</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>England</Table.Cell>
          <Table.Cell format="numeric">4,000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wales</Table.Cell>
          <Table.Cell format="numeric">2,500</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Scotland</Table.Cell>
          <Table.Cell format="numeric">600</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
