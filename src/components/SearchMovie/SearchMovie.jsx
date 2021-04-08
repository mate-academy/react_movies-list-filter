import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchMovie extends Component {
  state = {
    query: '',
  };

  handleValue = (event) => {
    this.setState({
      query: event.target.value,
    });

    this.props.filteredMovies(event.target.value);
  }

  render() {
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
            value={this.state.query}
            onChange={this.handleValue}
          />
        </div>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  filteredMovies: PropTypes.func.isRequired,
};
