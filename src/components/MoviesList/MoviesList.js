import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesList, sortedByQuery }) => (
  <div className="movies">
    {
      moviesList.map((movie) => {
        const filteredMovie = movie.title.toLowerCase().includes(sortedByQuery)
          || movie.description.toLowerCase().includes(sortedByQuery);

        return (
          filteredMovie && <MovieCard key={movie.imdbId} {...movie} />
        );
      })
    }
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  sortedByQuery: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  moviesList: [],
};
