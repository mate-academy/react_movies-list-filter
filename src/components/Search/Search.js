import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieCardShape } from '../shapes/MovieCardShape';

class Search extends Component {
  state = {
    query: '',
  };

  filterMovies = (event) => {
    const { name, value } = event.target;
    const { movies, update } = this.props;
    const valueToLower = value.toLowerCase();

    const filterCallback = (movie) => {
      const titleToLower = movie.title.toLowerCase();
      const descriptionToLower = movie.description.toLowerCase();

      return titleToLower.includes(valueToLower)
        || descriptionToLower.includes(valueToLower);
    };

    const updatedMovies = movies.filter(filterCallback);

    update(updatedMovies);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              name="query"
              className="input"
              value={query}
              placeholder="Type search word"
              onChange={this.filterMovies}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MovieCardShape)).isRequired,
  update: PropTypes.func.isRequired,
};

export default Search;
