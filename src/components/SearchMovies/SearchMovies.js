import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList/MoviesList';

class SearchMovies extends React.PureComponent {
  render() {
    const { query, movies } = this.props;

    const moviesMatchedQuery = movies.filter(movie => (
      movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)));

    return <MoviesList movies={moviesMatchedQuery} />;
  }
}

SearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default SearchMovies;
