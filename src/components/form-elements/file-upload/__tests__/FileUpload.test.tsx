import { createRef } from 'react';

import { FileUpload } from '..';

import { renderClient, renderServer } from '#util/components';

describe('FileUpload', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <FileUpload label="Upload a file" labelProps={{ size: 'l' }} id="file-upload" />,
      { moduleName: 'nhsuk-file-upload' },
    );

    expect(container).toMatchSnapshot('FileUpload');
  });

  it('matches snapshot with HTML in props', async () => {
    const { container } = await renderClient(
      <FileUpload
        label={
          <>
            <span className="nhsuk-caption-l">Example</span> Label text
          </>
        }
        labelProps={{
          isPageHeading: true,
          size: 'l',
        }}
        hint={
          <>
            Hint text <em>with HTML</em>
          </>
        }
        error={
          <>
            Error text <em>with HTML</em>
          </>
        }
        id="file-upload"
      />,
      { moduleName: 'nhsuk-file-upload' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <FileUpload label="Upload a file 1" labelProps={{ size: 'l' }} id="file-upload" />,
      { moduleName: 'nhsuk-file-upload' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-file-upload',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLInputElement>();

    const { container } = await renderClient(
      <FileUpload
        label="Upload a file 1"
        labelProps={{ size: 'l' }}
        formGroupProps={{ ref: groupRef }}
        id="file-upload"
        ref={fieldRef}
      />,
      { moduleName: 'nhsuk-file-upload' },
    );

    const groupEl = container.querySelector('div');
    const inputEl = container.querySelector('input');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(inputEl);
    expect(fieldRef.current).toHaveClass('nhsuk-file-upload__input');
  });

  it('should handle DOM events where ref exists', async () => {
    const ref = createRef<HTMLInputElement>();
    const mock = jest.fn();

    const handleClick = () => {
      if (!ref.current) return;
      mock();
    };

    const { modules } = await renderClient(
      <FileUpload
        label="Upload a file 1"
        labelProps={{ size: 'l' }}
        id="file-upload"
        onClick={handleClick}
        ref={ref}
      />,
      { className: 'nhsuk-file-upload__input' },
    );

    const [inputEl] = modules;
    inputEl.click();

    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('Sets the error class when error message is provided', async () => {
    const { modules } = await renderClient(
      <>
        <FileUpload
          label="Upload a file 1"
          labelProps={{ size: 'l' }}
          id="file-upload-1"
          error={undefined}
        />
        <FileUpload
          label="Upload a file 2"
          labelProps={{ size: 'l' }}
          id="file-upload-2"
          error="The selected file must be a JPG, BMP or TIF"
        />
      </>,
      { moduleName: 'nhsuk-file-upload' },
    );

    const [inputEl1, inputEl2] = modules;

    expect(inputEl1).not.toHaveClass('nhsuk-form-group--error');
    expect(inputEl2).toHaveClass('nhsuk-form-group--error');
  });
});
