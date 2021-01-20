import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const lowerQuery = query.toLowerCase();
  const visibleMovie = movies.filter(movie => (
    movie.title.toLowerCase().includes(lowerQuery)
  || movie.description.toLowerCase().includes(lowerQuery)
  ));

  return (
    <div className="movies">
      {visibleMovie.map(movie => (
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
  query: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
