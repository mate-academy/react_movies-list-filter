import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.map((movie) => {
      const { title, description, imdbId } = movie;

      if (title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase())) {
        return (
          <MovieCard key={imdbId} {...movie} />
        );
      }

      return null;
    })}
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
