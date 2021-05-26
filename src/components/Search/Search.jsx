import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class Search extends Component {
  state = {
    query: '',
  };

  render() {
    const { movies } = this.props;
    const textToLower = this.state.query.toLocaleLowerCase();
    const visibleMovies = movies.filter(({ title, description }) => (
      title.toLocaleLowerCase().includes(textToLower)
        || description.toLocaleLowerCase().includes(textToLower)
    ));

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
                value={this.state.query}
                onChange={event => this.setState({
                  query: event.target.value,
                })}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
