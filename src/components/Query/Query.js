import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

const Query = ({ movies, query }) => {
  const visibleMivies = movies.filter(({ title, description }) => (
    (title + description).toLowerCase().includes(query.toLowerCase())
  ));

  return <MoviesList movies={visibleMivies} />;
};

Query.propTypes = {
  query: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Query;
