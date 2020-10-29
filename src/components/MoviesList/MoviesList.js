import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.map((movie) => {
      const titleNormalized = movie.title.toLowerCase();
      const descriptionNormalized = movie.description.toLowerCase();
      const visible = titleNormalized.includes(query)
        || descriptionNormalized.includes(query);

      return (
        visible && <MovieCard key={movie.imdbId} {...movie} />
      );
    })}
  </div>
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
