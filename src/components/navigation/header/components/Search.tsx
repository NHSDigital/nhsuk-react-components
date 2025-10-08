import { type ComponentPropsWithoutRef, type FC } from 'react';
import { SearchIcon } from '#components/content-presentation/index.js';

export interface SearchProps extends ComponentPropsWithoutRef<'form'> {
  name?: string;
  placeholder?: string;
  visuallyHiddenLabel?: string;
  visuallyHiddenButton?: string;
}

export const Search: FC<SearchProps> = ({
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
      <form className="nhsuk-header__search-form" id={id} action={action} method={method} {...rest}>
        <label className="nhsuk-u-visually-hidden" htmlFor="search-field">
          {visuallyHiddenLabel}
        </label>
        <input
          className="nhsuk-header__search-input nhsuk-input"
          id="search-field"
          name={name}
          type="search"
          placeholder={placeholder}
          autoComplete="off"
        />
        <button className="nhsuk-header__search-submit" type="submit">
          <SearchIcon title={visuallyHiddenButton} />
        </button>
      </form>
    </search>
  );
};

Search.displayName = 'Header.Search';
