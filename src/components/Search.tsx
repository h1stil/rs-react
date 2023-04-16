import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import '../styles/_search.scss';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setSearch } from '../features/search/searchSlice';
import { RootState } from '../app/store';

function Search() {
  const dispatch = useAppDispatch();

  const search = useAppSelector((state: RootState) => state.search.search);

  const [searchValue, setSearchValue] = useState(search);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchValue(input);
  };

  const handleFormSubmit = () => {
    dispatch(setSearch(searchValue));
  };

  return (
    <div className="search__container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          name="search"
          autoComplete="off"
          value={searchValue}
          onChange={handleChange}
          id="search-input"
          data-testid="search-input"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default Search;
