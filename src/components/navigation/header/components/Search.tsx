import React, { FC, HTMLProps } from 'react';
import { Search as SearchIcon } from '@components/content-presentation/icons';

export interface SearchProps extends HTMLProps<HTMLFormElement> {
  name?: string;
  placeholder?: string;
  visuallyHiddenLabel?: string;
  visuallyHiddenButton?: string;
}

const Search: FC<SearchProps> = ({
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

export default Search;
