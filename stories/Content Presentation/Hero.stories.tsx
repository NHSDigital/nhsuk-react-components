import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Hero } from '#components/content-presentation/hero/index.js';

const meta: Meta<typeof Hero> = {
  title: 'Content Presentation/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    width: false,
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  name: 'Hero default',
  render: (args) => (
    <Hero {...args}>
      <Hero.Heading>We&apos;re here for you.</Hero.Heading>
      <Hero.Text>Helping you take control of your health and wellbeing.</Hero.Text>
    </Hero>
  ),
};

export const WithImage: Story = {
  name: 'Hero with image',
  args: {
    imageSrc: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
};

export const WithImageContent: Story = {
  name: 'Hero with image, content',
  args: {
    imageSrc: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg',
  },
  render: Default.render,
};
