import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import '../styles/_search.scss';

class Search extends Component {
  state = {
    search: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { search } = this.state;
    localStorage.setItem('search', search);
  };

  componentDidMount() {
    const search = localStorage.getItem('search');
    this.setState({ search });
  }

  render() {
    return (
      <div className="search__container">
        <form>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            autoComplete="off"
            value={this.state.search}
            onChange={this.handleChange}
            onBlur={this.handleFormSubmit}
            id="search-input"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
