import { type Preview } from '@storybook/react-vite';

import { Col, Container, Row } from '#components/layout/index.js';

import './storybook.scss';

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
    docs: {
      codePanel: true,
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
    viewport: {
      options: {
        watch: {
          name: 'Watch',
          styles: {
            width: '224px',
            height: '184px',
          },
          type: 'other',
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '641px',
            height: '768px',
          },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '769px',
            height: '1024px',
          },
          type: 'desktop',
        },
        desktopL: {
          name: 'Large desktop',
          styles: {
            width: '990px',
            height: '1024px',
          },
          type: 'desktop',
        },
        desktopXL: {
          name: 'Extra large desktop',
          styles: {
            width: '1281px',
            height: '1024px',
          },
          type: 'desktop',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
