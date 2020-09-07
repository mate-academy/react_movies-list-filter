import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class Search extends React.Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const { movies } = this.props;

    const findedMovies = movies.filter(movie => (
      (movie.title + movie.description)
        .toLowerCase().includes(query.toLowerCase())
    ));

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
                onChange={(event) => {
                  const search = event.target.value;

                  this.setState(() => ({ query: search }));
                }}
              />

            </div>
          </div>

          <MoviesList movies={findedMovies} />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
