import React, { FC, HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { Search as SearchIcon } from '@components/icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

export interface SearchProps extends HTMLProps<HTMLInputElement> {
  visuallyHiddenText?: string;
}

const Search: FC<SearchProps> = ({
  action,
  method = 'get',
  type = 'search',
  id = 'search-field',
  visuallyHiddenText = 'Search the NHS website',
  autoComplete = 'off',
  role = 'search',
  placeholder = 'Search',
  ...rest
}) => {
  const { setSearch } = useContext<IHeaderContext>(HeaderContext);
  useEffect(() => {
    setSearch(true);
    return () => setSearch(false);
  }, []);
  return (
    <div className="nhsuk-header__search">
      <div className={classNames('nhsuk-header__search-wrap')}>
        <form className="nhsuk-header__search-form" action={action} method={method} role="search">
          <label className="nhsuk-u-visually-hidden" htmlFor={id}>
            {visuallyHiddenText}
          </label>
          <input
            className="nhsuk-search__input"
            id={id}
            type={type}
            autoComplete={autoComplete}
            role={role}
            placeholder={placeholder}
            {...rest}
          />
          <button className="nhsuk-search__submit" type="submit">
            <SearchIcon width={27} height={27} />
            <span className="nhsuk-u-visually-hidden">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
