import { Images } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Images> = {
  title: 'Components/Images',
  component: Images,
  args: {
    src: 'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-320x213.jpg',
    alt: 'Picture of allergic conjunctivitis',
    sizes: '(min-width: 1020px) 320px, (min-width: 768px) 50vw, 100vw',
    srcSet:
      'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-640x427.jpg 640w, https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-767x511.jpg 767w',
  },
};
export default meta;
type Story = StoryObj<typeof Images>;

export const ImageWithCaption: Story = {
  args: {
    caption: 'Caption for image',
  },
};

export const ImageWithoutCaption: Story = {};
