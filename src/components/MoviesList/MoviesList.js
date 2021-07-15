import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, valueSearch }) => {
  const copyMovies = [...movies].filter(({ title, description }) => (
    title + description).toLowerCase().includes(valueSearch));

  return (
    <div className="movies">
      {copyMovies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
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
  valueSearch: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
