import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchableFilm }) => (
  <div className="movies">
    {movies.filter(movie => movie.title.toLowerCase().includes(searchableFilm)
    || movie.description.toLowerCase().includes(searchableFilm))
      .map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
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
  searchableFilm: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  searchableFilm: '',
};
