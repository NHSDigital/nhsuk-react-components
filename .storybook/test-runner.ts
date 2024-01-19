import { TestRunnerConfig } from '@storybook/test-runner';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { injectAxe, checkA11y } from 'axe-playwright';

const config: TestRunnerConfig = {
  tags: {
    /**
     * Any Story can be skipped by adding the `no-test` tag to it.
     * This is primaraily used for stories that generate dynamic id's as the snapshot will fail.
     */
    skip: ['no-test'],
  },
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    if (!innerHTML) throw new Error('No innerHTML found');
    expect(innerHTML).toMatchSnapshot();

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      verbose: false,
    });
  },
};

export default config;
