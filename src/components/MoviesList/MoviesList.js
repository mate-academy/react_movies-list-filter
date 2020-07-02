import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { ShapeMovieCard } from '../../Shapes/ShapeMovieCard';

export const MoviesList = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(ShapeMovieCard),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
