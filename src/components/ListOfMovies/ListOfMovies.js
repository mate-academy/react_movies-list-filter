import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class ListOfMovies extends React.Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const { movies } = this.props;

    const searchMovies = movies.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    ));

    return (
      <>
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={({ target }) => {
                  this.setState({
                    query: target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={searchMovies} />
      </>
    );
  }
}

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

ListOfMovies.defaultProps = {
  movies: [],
};
