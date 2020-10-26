import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = React.memo(
  ({ query, movies }) => {
    const filteredMovies = movies.filter((movie) => {
      const isTitle = movie.title
        .toLowerCase()
        .includes(
          query
            .trim()
            .toLowerCase(),
        );

      const isDescription = movie.description
        .toLowerCase()
        .includes(
          query
            .trim()
            .toLowerCase(),
        );

      return isTitle || isDescription;
    });

    return (
      <div className="movies">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.imdbId} {...movie} />
        ))}
      </div>
    );
  },
);

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

export default React.memo(MoviesList);
