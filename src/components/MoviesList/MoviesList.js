import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = movies.filter((movie) => {
    const { title, description } = movie;
    const cardText = `${title} ${description}`;

    return cardText.toLowerCase().includes(query);
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
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
  query: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  query: '',
};
