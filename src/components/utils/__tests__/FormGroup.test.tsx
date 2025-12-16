import { axe, toHaveNoViolations } from 'jest-axe';

import { FormGroup } from '..';

import { type TextInputProps } from '#components/form-elements';
import { renderClient, renderServer } from '#util/components';
import type { FormElementRenderProps } from '#util/types/FormTypes';

expect.extend(toHaveNoViolations);

describe('FormGroup', () => {
  let renderProps: FormElementRenderProps<TextInputProps, 'input'> | undefined;

  beforeEach(() => {
    renderProps = undefined;
  });

  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'> id="testId">{(props) => <input {...props} />}</FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <FormGroup<TextInputProps, 'input'> id="testId">{(props) => <input {...props} />}</FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-form-group',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('generates a random ID for the input', async () => {
    await renderClient(
      <FormGroup<TextInputProps, 'input'>>
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toHaveLength(11);
    expect(renderProps?.id).toContain('input');
  });

  it('allows passing of custom IDs', async () => {
    await renderClient(
      <FormGroup<TextInputProps, 'input'> id="TestID2ElectricBoogaloo">
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toBe('TestID2ElectricBoogaloo');
  });

  it('passes correct props for hint (generated id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'> hint="This is a test hint">
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toHaveLength(11);
    expect(renderProps?.id).toContain('input');

    const hintEl = container.querySelector('.nhsuk-hint');
    const inputEl = container.querySelector('input');

    expect(hintEl).toHaveProperty('id', `${renderProps?.id}--hint`);
    expect(inputEl?.getAttribute('aria-describedby')).toBe(`${renderProps?.id}--hint`);
  });

  it('passes correct props for hint (custom id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'> hint="This is a test hint" id="testID">
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toBe('testID');

    const hintEl = container.querySelector('.nhsuk-hint');
    const inputEl = container.querySelector('input');

    expect(hintEl).toHaveProperty('id', 'testID--hint');
    expect(inputEl?.getAttribute('aria-describedby')).toBe('testID--hint');
  });

  it('passes correct props for label (generated id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'> label="This is a test label">
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toHaveLength(11);
    expect(renderProps?.id).toContain('input');

    expect(container.querySelector('.nhsuk-label')?.getAttribute('id')).toBe(
      `${renderProps?.id}--label`,
    );
    expect(container.querySelector('.nhsuk-label')?.getAttribute('for')).toBe(renderProps?.id);
  });

  it('passes correct props for label (custom id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'>
        label="This is a test label"
        labelProps={{ title: 'TestTitle' }}
        id="testID"
      >
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toBe('testID');

    expect(container.querySelector('.nhsuk-label')?.getAttribute('id')).toBe('testID--label');
    expect(container.querySelector('.nhsuk-label')?.getAttribute('for')).toBe('testID');
    expect(container.querySelector('.nhsuk-label')?.textContent).toBe('This is a test label');
    expect(container.querySelector('.nhsuk-label')?.getAttribute('title')).toBe('TestTitle');
  });

  it('passes correct props for error (generated id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'>
        error="This is a test error"
        errorProps={{ title: 'TestTitle' }}
      >
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toHaveLength(11);
    expect(renderProps?.id).toContain('input');
    expect(renderProps!['aria-describedby']).toBe(`${renderProps?.id}--error-message`);

    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('id')).toBe(
      `${renderProps?.id}--error-message`,
    );
    expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
      'Error: This is a test error',
    );
    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('title')).toBe(
      'TestTitle',
    );
  });

  it('passes correct props for error (custom id)', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'>
        error="This is a test error"
        errorProps={{ title: 'TestTitle' }}
        id="testID"
      >
        {(props) => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    expect(renderProps?.id).toBe('testID');
    expect(renderProps!['aria-describedby']).toBe(`testID--error-message`);

    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('id')).toBe(
      'testID--error-message',
    );
    expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
      'Error: This is a test error',
    );
    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('title')).toBe(
      'TestTitle',
    );
  });

  describe('applies the correct classes when errored', () => {
    it('string component', async () => {
      const { container } = await renderClient(
        <FormGroup<TextInputProps, 'input'> error="Oh no there's an error!">
          {({ error, ...rest }) => <input {...rest} />}
        </FormGroup>,
        { className: 'nhsuk-form-group' },
      );

      expect(container.querySelector('div.nhsuk-form-group')?.classList).toContain(
        'nhsuk-form-group--error',
      );
      expect(container.querySelector('.nhsuk-error-message')).toBeTruthy();
      expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
        "Error: Oh no there's an error!",
      );
    });
  });

  it('should produce an accessible component', async () => {
    const { container } = await renderClient(
      <main>
        <FormGroup<TextInputProps, 'input'>
          error="This is an error"
          hint="This is a hint"
          label="Form Label"
        >
          {({ error, ...rest }) => <input {...rest} />}
        </FormGroup>
      </main>,
      { className: 'nhsuk-form-group' },
    );

    const html = container.innerHTML;
    expect(await axe(html)).toHaveNoViolations();
  });

  it('should add hint ID and error ID to the aria-describedby of the input', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'>
        id="error-and-hint"
        error="This is an error"
        hint="This is a hint"
      >
        {({ error, ...rest }) => <input {...rest} />}
      </FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    const inputEl = container.querySelector('input');
    expect(inputEl?.getAttribute('aria-describedby')).toBe(
      'error-and-hint--hint error-and-hint--error-message',
    );
  });

  it('should have no aria-describedby when there is no hint or label', async () => {
    const { container } = await renderClient(
      <FormGroup<TextInputProps, 'input'>>{({ error, ...rest }) => <input {...rest} />}</FormGroup>,
      { className: 'nhsuk-form-group' },
    );

    const inputEl = container.querySelector('input');
    expect(inputEl?.getAttribute('aria-describedby')).toBe(null);
  });
});
