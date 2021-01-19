import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchQuery }) => (

  <div className="movies">
    {movies
      .filter((item) => {
        const insensitiveQuery = searchQuery.toLowerCase();
        const insensitiveTitle = item.title.toLowerCase();
        const insensitiveDescription = item.description.toLowerCase();

        return insensitiveTitle.includes(insensitiveQuery)
          || insensitiveDescription.includes(insensitiveQuery);
      })
      .map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
  </div>
);

MoviesList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
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
