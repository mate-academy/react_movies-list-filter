import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class Search extends React.Component {
    state = {
      query: '',
    };

    render() {
      const { query } = this.state;
      const { movies } = this.props;

      const visiableMovies = movies
        .filter(movie => movie.title.toLowerCase()
          .includes(query.toLowerCase())
            || movie.description.toLowerCase()
              .includes(query.toLowerCase()));

      return (
        <>
          <div className="box">
            <div className="field">
              <label htmlFor="searchQuery" className="label">
                Search movie
              </label>

              <div className="searchField">
                <input
                  type="text"
                  id="searchQuery"
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
          <MoviesList movies={visiableMovies} />
        </>
      );
    }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
