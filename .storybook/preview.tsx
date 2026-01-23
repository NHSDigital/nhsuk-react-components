import './storybook.scss';
import { type Preview } from '@storybook/react-vite';

import { Col, Container, Row } from '#components/layout/index.js';

const preview: Preview = {
  decorators: (Story, { parameters }) =>
    parameters.width === false ? (
      <Story />
    ) : (
      <Container>
        <main className="nhsuk-main-wrapper" id="maincontent">
          <Row>
            <Col width={parameters.width ?? 'two-thirds'}>
              <Story />
            </Col>
          </Row>
        </main>
      </Container>
    ),
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#005eb8' },
        light: { name: 'Light', value: '#f0f4f5' },
        white: { name: 'White', value: '#fff' },
        grey: { name: 'Grey', value: '#d8dde0' },
      },
    },
    width: 'two-thirds',
    layout: 'fullscreen',
    initialGlobals: {
      backgrounds: { value: 'light' },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Migration Guides',
          'Form Elements',
          'Content Presentation',
          'Navigation',
          'Layout',
          'Patterns',
        ],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
