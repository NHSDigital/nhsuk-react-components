import { type ComponentPropsWithoutRef, type FC } from 'react';

import { SearchIcon } from '#components/content-presentation/index.js';
import { Button } from '#components/form-elements/button/index.js';
import { TextInput } from '#components/form-elements/text-input/index.js';

export interface HeaderSearchProps extends ComponentPropsWithoutRef<'form'> {
  name?: string;
  placeholder?: string;
  visuallyHiddenLabel?: string;
  visuallyHiddenButton?: string;
}

export const HeaderSearch: FC<HeaderSearchProps> = ({
  action = 'https://www.nhs.uk/search/',
  method = 'get',
  id = 'search',
  name = 'q',
  placeholder = 'Search',
  visuallyHiddenLabel = 'Search the NHS website',
  visuallyHiddenButton = 'Search',
  ...rest
}) => {
  return (
    <search className="nhsuk-header__search">
      <form
        className="nhsuk-header__search-form"
        id={id}
        action={action}
        method={method}
        {...rest}
        noValidate
      >
        <TextInput
          label={visuallyHiddenLabel}
          labelProps={{ className: 'nhsuk-u-visually-hidden' }}
          id="search-field"
          name={name}
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          formGroupProps={{
            afterInput: (
              <Button small>
                <SearchIcon title={visuallyHiddenButton} />
              </Button>
            ),
          }}
        />
      </form>
    </search>
  );
};

HeaderSearch.displayName = 'Header.Search';
