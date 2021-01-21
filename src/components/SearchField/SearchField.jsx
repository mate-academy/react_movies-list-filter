import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class SearchField extends React.Component {
  state = {
    query: '',
  };

  render() {
    const { movies } = this.props;

    const searchQuery = this.state.query.toLocaleLowerCase().trim();
    const filteredMovies = [...movies]
      .filter(movie => movie.title.toLocaleLowerCase().includes(searchQuery)
        || movie.description.toLocaleLowerCase().includes(searchQuery));

    return (
      <div className="page-content">

        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <div className="control">
              <input
                onChange={(e) => {
                  this.setState({
                    query: e.target.value,
                  });
                }}
                value={this.state.query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>
        <MoviesList movies={filteredMovies} />
      </div>
    );
  }
}

SearchField.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
