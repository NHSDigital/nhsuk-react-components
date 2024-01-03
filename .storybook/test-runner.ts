import { waitForPageReady, TestRunnerConfig } from '@storybook/test-runner';

import { toMatchImageSnapshot } from 'jest-image-snapshot';

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    if (!innerHTML) throw new Error('No innerHTML found');
    expect(innerHTML).toMatchSnapshot();

    // Waits for the page to be ready before taking a screenshot to ensure consistent results
    await waitForPageReady(page);

    // To capture a screenshot for for different browsers, add page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: context.id,
    });
  },
};

export default config;
