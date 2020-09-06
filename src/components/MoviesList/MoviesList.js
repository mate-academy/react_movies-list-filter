import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.filter(movie => (
      movie.title.toLowerCase()
        .includes(query.toLowerCase())
      || movie.description.toLowerCase()
        .includes(query.toLowerCase())
    ))
      .map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))
    }
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
  query: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
