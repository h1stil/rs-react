import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

import '../styles/_search.scss';

interface MyProps {
  search?: string;
}
interface MyState {
  search: string;
}

class Search extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const search = localStorage.getItem('search');
    if (search) {
      this.setState({ search });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;
    this.setState({ search: value });
  };

  handleFormSubmit = () => {
    const { search } = this.state;
    localStorage.setItem('search', search);
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search__container">
        <form>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            autoComplete="off"
            value={search}
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
