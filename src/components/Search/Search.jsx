import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

class Search extends React.PureComponent {
  state = {
    query: '',
  }

  searchMovie = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  filteredMovies = (movies, query) => (
    movies
      .filter(movie => movie.title.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()))
    || movies.filter(movie => movie.description.toLocaleLowerCase()
      .includes(query.toLocaleLowerCase()))
  )

  render() {
    const { query } = this.state;
    const { movies } = this.props;

    return (
      <div className="page-content">
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
                onChange={this.searchMovie}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={this.filteredMovies(movies, query)} />
      </div>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Search;
