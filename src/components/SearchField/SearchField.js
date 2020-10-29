import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchField extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.props.handleSearch(value);

    this.setState({
      query: value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            value={query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

SearchField.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
