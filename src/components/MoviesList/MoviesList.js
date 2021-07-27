import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies
      .filter((movie) => {
        const { title, description } = movie;
        const lowCaseQuery = query.toLowerCase();

        return (
          title.toLowerCase().includes(lowCaseQuery)
          || description.toLowerCase().includes(lowCaseQuery)
        );
      })
      .map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))
    }
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
  query: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
