import classNames from 'classnames';
import React, { HTMLProps, useContext, useEffect } from 'react';
import { Close as CloseIcon, Search as SearchIcon } from '../../icons';
import VisuallyHidden from '../../visually-hidden';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

export interface SearchProps extends HTMLProps<HTMLInputElement> {
  visuallyHiddenText?: string;
}

const Search: React.FC<SearchProps> = ({ action, method, id, visuallyHiddenText, ...rest }) => {
  const { setSearch, toggleSearch, searchOpen } = useContext<IHeaderContext>(HeaderContext);
  useEffect(() => {
    setSearch(true);
    return () => setSearch(false);
  }, []);
  return (
    <div className="nhsuk-header__search">
      <button
        className={classNames('nhsuk-header__search-toggle', { 'is-active': searchOpen })}
        aria-label="Open search"
        aria-expanded={searchOpen ? 'true' : 'false'}
        onClick={toggleSearch}
      >
        <SearchIcon />
        <VisuallyHidden>Search</VisuallyHidden>
      </button>
      <div className={classNames('nhsuk-header__search-wrap', { 'js-show': searchOpen })}>
        <form className="nhsuk-header__search-form" action={action} method={method} role="search">
          <VisuallyHidden asElement="label" htmlFor={id}>
            {visuallyHiddenText}
          </VisuallyHidden>
          <input className="nhsuk-search__input" id={id} {...rest} />
          <button className="nhsuk-search__submit" type="submit">
            <SearchIcon />
            <VisuallyHidden>Search</VisuallyHidden>
          </button>
          <button className="nhsuk-search__close">
            <CloseIcon />
            <VisuallyHidden>Close search</VisuallyHidden>
          </button>
        </form>
      </div>
    </div>
  );
};

Search.defaultProps = {
  method: 'get',
  role: 'search',
  id: 'search-field',
  visuallyHiddenText: 'Search the NHS website',
  type: 'search',
  autoComplete: 'off',
  placeholder: 'Search',
};

export default Search;
