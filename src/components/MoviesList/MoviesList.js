import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchLetters }) => {
  let card;
  const pattern = new RegExp(`${searchLetters}`, 'gi');

  if (searchLetters) {
    card = movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    )).filter(item => pattern.test(item.description)
    || pattern.test(item.title));
  } else {
    card = movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ));
  }
  // searchLetters
  //   ? card.filter(movie => movie.description.toLowerCase().includes(word)
  //   || movie.title.toLowerCase().includes(word))
  //   : card

  return (
    <div className="movies">
      {card}
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
  searchLetters: PropTypes.string,
};

MoviesList.defaultProps = {
  movies: [],
  searchLetters: '',
};
