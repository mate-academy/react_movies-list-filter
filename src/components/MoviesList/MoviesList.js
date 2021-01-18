import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = movies.filter((movie) => {
    const titleTLC = movie.title.toLowerCase();
    const discriptionTLC = movie.description.toLowerCase();

    return titleTLC.includes(query) || discriptionTLC.includes(query);
  });

  return filteredMovies.length >= 1 ? (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  ) : (
    <div className="movies">
      Noting found
    </div>
  );
};

MoviesList.propTypes = {
  query: PropTypes.string.isRequired,
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
};
