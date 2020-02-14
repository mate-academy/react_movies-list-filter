import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovieList = movies
    .filter(movie => (movie.title + movie.description)
      .toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="movies">
      {filteredMovieList.map(movie => (
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
    }).isRequired,
  ),
  query: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
