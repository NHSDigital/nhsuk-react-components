import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type FC, type ReactNode } from 'react';

import { HintText } from '#components/form-elements/hint-text/index.js';
import { Col, Container, Row } from '#components/layout/index.js';
import { SkipLink } from '#components/navigation/skip-link/index.js';

const CodeText: FC<{ children: ReactNode }> = ({ children }) => (
  <span
    style={{
      fontFamily: 'monospace',
      marginLeft: 5,
      marginRight: 5,
      fontSize: 14,
      padding: 3,
      backgroundColor: 'rgba(255, 0, 0, 0.15)',
      borderRadius: 5,
    }}
  >
    {children}
  </span>
);

const meta: Meta<typeof SkipLink> = {
  title: 'Navigation/Skip link',
  component: SkipLink,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the skip link component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/skip-link) for guidance,
          examples and options.
        </Markdown>
      ),
    },
    layout: 'fullscreen',
    width: false,
  },
  render: (args) => (
    <>
      <HintText>
        Press
        <CodeText>tab</CodeText>
        to show the SkipLink
      </HintText>

      <SkipLink {...args} />

      <Container>
        <main className="nhsuk-main-wrapper" id="maincontent">
          <Row>
            <Col width="two-thirds">
              <h1>Page heading</h1>
              <p>This is the main content</p>
            </Col>
          </Row>
        </main>
      </Container>
    </>
  ),
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {};
