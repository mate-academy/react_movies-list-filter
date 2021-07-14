import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, valueSearch }) => {
  const copyMovies = [...movies];

  copyMovies.sort((prevMovie, nextMovie) => {
    const prevSearchResTitle = (
      prevMovie.title.toLowerCase().indexOf(valueSearch));
    const prevSearchResDescript = (
      prevMovie.description.toLowerCase().indexOf(valueSearch));
    const nextSearchResTitle = (
      nextMovie.title.toLowerCase().indexOf(valueSearch));
    const nextSearchResDescript = (
      nextMovie.description.toLowerCase().indexOf(valueSearch));

    if (prevSearchResTitle !== nextSearchResTitle
      || prevSearchResDescript !== nextSearchResDescript) {
      if (prevSearchResTitle === 0
        || (prevSearchResDescript === 0 && nextSearchResTitle !== 0)) {
        return -1;
      }

      if (nextSearchResTitle === 0 || nextSearchResDescript === 0) {
        return 1;
      }
    }

    return 0;
  });

  return (
    <div className="movies">
      {copyMovies.map(movie => (
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
  valueSearch: PropTypes.string.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
