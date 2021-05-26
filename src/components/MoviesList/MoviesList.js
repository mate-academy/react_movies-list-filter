import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, querry }) => (
  <div className="movies">
    {movies.map((movie) => {
      if (movie.title.toLowerCase().includes(querry.toLowerCase())
        || movie.description.toLowerCase().includes(querry.toLowerCase())
      ) {
        return <MovieCard key={movie.imdbId} {...movie} />;
      }

      return false;
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
  querry: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  querry: '',
};
