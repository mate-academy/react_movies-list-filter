import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchQuery }) => {
  const moviesList = movies.filter(movie => movie.title
    .toLowerCase().includes(searchQuery.toLowerCase())
    || movie.description.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="movies">
      {moviesList.map(movie => (
        <MovieCard
          key={movie.imdbId}
          {...movie}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  searchQuery: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
