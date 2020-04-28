import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => (
  <div className="movies">
    {(search.length === 0) ? movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
      // eslint-disable-next-line array-callback-return,consistent-return
    )) : movies.filter((movie) => {
      if (
        movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || movie.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
      ) {
        return movie;
      }
    }).map(movie => (
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
  search: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
