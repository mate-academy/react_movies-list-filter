import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchValue }) => {
  let moviesFiltered = [];

  if (searchValue) {
    moviesFiltered = movies
      .filter(({ title, description }) => title
        .toLowerCase()
        .includes(searchValue)
        || description
          .toLowerCase()
          .includes(searchValue));
  }

  return (
    <div className="movies">
      {searchValue
        ? (moviesFiltered.map(movie => (
          <MovieCard key={movie.imdbId} {...movie} />
        )))
        : (movies.map(movie => (
          <MovieCard key={movie.imdbId} {...movie} />
        )))
      }
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  searchValue: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  searchValue: '',
};
