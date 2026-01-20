'use client';

import classNames from 'classnames';
import { type FileUpload as FileUploadModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface FileUploadElementProps extends ComponentPropsWithoutRef<'input'> {
  chooseFilesButtonClassList?: string[];
}

export type FileUploadProps = FileUploadElementProps &
  Omit<
    FormElementProps<FileUploadElementProps, 'input'>,
    'fieldsetProps' | 'legend' | 'legendProps'
  >;

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ formGroupProps, ...props }, forwardedRef) => {
    const { chooseFilesButtonClassList, ...rest } = props;

    const moduleRef = useRef<HTMLDivElement>(null);
    const importRef = useRef<Promise<FileUploadModule | void>>(null);
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<FileUploadModule>();

    useImperativeHandle(formGroupProps?.ref, () => moduleRef.current!, [moduleRef]);

    useEffect(() => {
      if (!moduleRef.current || importRef.current || instance) {
        return;
      }

      importRef.current = import('nhsuk-frontend')
        .then(({ FileUpload }) => setInstance(new FileUpload(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, importRef, instance]);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <FormGroup<FileUploadProps, 'input'>
        {...rest}
        formGroupProps={{
          ...formGroupProps,
          'className': classNames('nhsuk-file-upload', formGroupProps?.className),
          'data-module': 'nhsuk-file-upload',
          'data-choose-files-button-class-list': chooseFilesButtonClassList
            ? JSON.stringify(chooseFilesButtonClassList)
            : undefined,
          'ref': moduleRef,
        }}
      >
        {({ width, className, error, autoComplete, ...rest }) => (
          <input
            className={classNames('nhsuk-file-upload__input', className)}
            ref={forwardedRef}
            type="file"
            {...rest}
          />
        )}
      </FormGroup>
    );
  },
);

FileUpload.displayName = 'FileUpload';
