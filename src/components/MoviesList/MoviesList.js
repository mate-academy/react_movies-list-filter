import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => (

  <div className="movies">
    {movies.filter(card => (
      card.title.toLowerCase().includes(search.toLowerCase())
      || card.description.toLowerCase().includes(search.toLowerCase())))
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
  search: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  search: '',
};
