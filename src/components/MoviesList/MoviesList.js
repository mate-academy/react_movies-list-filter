import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export function MoviesList({ movies, query }) {
  const filtredMovies = movies.filter((movie) => {
    const description = movie.description.toLowerCase();
    const title = movie.title.toLowerCase();
    const value = query.toLowerCase();

    return title.match(value) || description.match(value);
  });

  return (
    <div className="movies">
      {filtredMovies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),

  query: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
