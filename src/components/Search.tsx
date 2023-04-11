import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import '../styles/_search.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const search = localStorage.getItem('search');
    if (search) {
      setSearchValue(search);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchValue(input);
  };

  const handleFormSubmit = () => {
    localStorage.setItem('search', searchValue);
    window.dispatchEvent(new Event('storage'));
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
          onBlur={() => handleFormSubmit()}
          id="search-input"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default Search;
