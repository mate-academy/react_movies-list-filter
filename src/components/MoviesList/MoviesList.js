import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = movies.filter(movie => (
    movie.description.toLowerCase()
      .includes(query.toLowerCase())
    || movie.title.toLowerCase().includes(
      query.toLowerCase(),
    )));

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          {...movie}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
