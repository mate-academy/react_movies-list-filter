import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MoviesList } from '../MoviesList';

export class Search extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { movies } = this.props;
    const query = this.state.query.toLowerCase();
    const filteredMovies = movies.filter(({ title, description }) =>
    // eslint-disable-next-line
      title.toLowerCase().indexOf(query) === 0
      || description
        .toLowerCase()
        .split(' ')
        .some(word => word.indexOf(query) === 0));

    return (
      <>
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
                placeholder="Type search word"
                name="query"
                value={this.state.query}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

Search.defaultProps = {
  movies: [],
};
