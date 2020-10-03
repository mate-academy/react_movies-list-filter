import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  handleChange = (event) => {
    this.props.changeQuery(event.target.value);
  }

  findMovies = () => {
    this.props.filterMovies();
  }

  render() {
    const { query } = this.props.query;

    return (
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              name="query"
              placeholder="Type search word"
              value={query}
              onChange={(event) => {
                this.handleChange(event);
                this.findMovies();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string,
  changeQuery: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
};

Search.defaultProps = {
  query: '',
};
