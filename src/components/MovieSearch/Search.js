import React from 'react';
import PropTypes from 'prop-types';
import { MoviesShape } from '../Shapes';

export class Search extends React.Component {
  state = {
    movies: this.props.movies,
    query: '',
  }

  onSortMovies = () => {
    const { query } = this.state;
    const filteredMovies = this.state.movies
      .filter(({ title, description }) => (
        title.toLowerCase().includes(query)
          || description.toLowerCase().includes(query)
      ));

    this.props.onChange(filteredMovies);
  }

  queryStateSetter = value => (
    this.setState({ query: value }, () => this.onSortMovies())
  )

  handleInputChange = (event) => {
    const searchPattern = event.target.value.toLowerCase();

    this.queryStateSetter(searchPattern);
  }

  render() {
    return (
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              value={this.state.query}
              onChange={this.handleInputChange}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>

    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(MoviesShape).isRequired,
};
