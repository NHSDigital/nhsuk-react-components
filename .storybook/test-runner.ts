import { TestRunnerConfig } from '@storybook/test-runner';

import { toMatchImageSnapshot } from 'jest-image-snapshot';

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
  async postVisit(page) {
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    if (!innerHTML) throw new Error('No innerHTML found');
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
