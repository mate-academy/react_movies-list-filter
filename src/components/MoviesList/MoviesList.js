import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesList, sortedByQuery }) => (
  <div className="movies">
    {
      moviesList.map((movie) => {
        const query = sortedByQuery.toLowerCase();
        const filteredMovie = movie.title.toLowerCase().includes(query)
          || movie.description.toLowerCase().includes(query);

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
