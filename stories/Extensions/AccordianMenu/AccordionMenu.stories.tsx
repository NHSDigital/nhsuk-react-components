/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AccordionMenu from '@components/accordion-menu/AccordionMenu';

const meta: Meta<typeof AccordionMenu> = {
  title: 'Extensions/Accordion Menu',
  component: AccordionMenu,
};
export default meta;

type Story = StoryObj<typeof AccordionMenu>;

export const Standard: Story = {
  render: () => (
    <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
  ),
};

export const WithDefaultOpen: Story = {
  render: () => (
    <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!" defaultOpen>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
  ),
};

export const ProgrammaticControl: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <label htmlFor="open-accordion">
          <input
            type="checkbox"
            id="open-accordion"
            onChange={(e) => setIsOpen(e.target.checked)}
          />
          {' '}Open Accordion Section
        </label>

        <AccordionMenu className="accordion-demo">
          <AccordionMenu.Section heading="Greetings!" open={isOpen}>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Salutations!">
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Greetings!">
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Salutations!">
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
          </AccordionMenu.Section>
        </AccordionMenu>
      </>
    );
  },
};
