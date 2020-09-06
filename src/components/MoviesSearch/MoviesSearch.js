import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class MoviesSearch extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const filteredMovies = this.props.movies.filter(
      movie => movie.title.toLowerCase()
        .includes(query.toLowerCase())
      || movie.description.toLowerCase()
        .includes(query.toLowerCase()),
    );

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
                onChange={(event) => {
                  this.setState({ query: event.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={filteredMovies} />
      </>
    );
  }
}

MoviesSearch.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
