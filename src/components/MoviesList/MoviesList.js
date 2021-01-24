import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => (
  <div className="movies">
    {(movies.filter(movie => movie.title.toLowerCase()
      .includes(search.toLowerCase())
    || movie.description.toLowerCase().includes(search.toLowerCase()))
      .map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      )))}
  </div>
);

MoviesList.propTypes = {
  search: PropTypes.string.isRequired,
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
