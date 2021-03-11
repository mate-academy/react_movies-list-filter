import React from 'react';
import PropTypes from 'prop-types';
import { MovieType } from '../../Types/types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export function MoviesList({ movies, query }) {
  const filteredMovieByTitle = [...movies].filter(
    movie => movie.title.toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="movies">
      {filteredMovieByTitle.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    MovieType,
  ),
  query: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
