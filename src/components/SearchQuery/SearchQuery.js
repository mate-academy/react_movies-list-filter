import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList/MoviesList';

const SearchQuery = ({ movies, query }) => {
  const filteredMovies = movies.filter(({ title, description }) => (
    (title + description).toLowerCase().includes(query.toLowerCase())
  ));

  return <MoviesList movies={filteredMovies} />;
};

SearchQuery.propTypes = {
  query: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default SearchQuery;
