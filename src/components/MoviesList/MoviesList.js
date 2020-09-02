import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchValue }) => (
  <div className="movies">
    {movies.map((movie) => {
      const showPermission = movie.title.toLowerCase()
        .includes(searchValue.toLowerCase())
      || movie.description.toLowerCase()
        .includes(searchValue.toLowerCase())
      || searchValue === '';

      return (
        showPermission && <MovieCard key={movie.imdbId} {...movie} />
      );
    })}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  searchValue: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
