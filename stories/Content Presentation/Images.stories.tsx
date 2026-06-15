import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Images } from '#components/content-presentation/images/index.js';

const meta: Meta<typeof Images> = {
  title: 'Content Presentation/Images',
  component: Images,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the images component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/images) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Images>;

export const Default: Story = {
  name: 'Image default',
  args: {
    src: 'https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg',
    caption:
      'No specific amount of time is recommended, but a typical training session could take less than 20 minutes.',
  },
};

export const WithSrcSet: Story = {
  name: 'Image with srcset',
  args: {
    src: 'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg',
    sizes: '(max-width: 768px) 100vw, 66vw',
    srcSet:
      'https://service-manual.nhs.uk/assets/image-example-stretch-marks-600w.jpg 600w, https://service-manual.nhs.uk/assets/image-example-stretch-marks-1000w.jpg 1000w',
    caption:
      'Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time.',
  },
};

export const WithSrcSetAltText: Story = {
  name: 'Image with srcset and alt text',
  args: {
    ...WithSrcSet.args,
    alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  },
};

export const WithoutCaption: Story = {
  name: 'Image without caption',
  args: {
    ...WithSrcSetAltText,
    caption: undefined,
  },
};
