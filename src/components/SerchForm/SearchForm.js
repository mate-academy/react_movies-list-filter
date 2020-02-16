import React, { Component } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  state = {
    query: '',
  }

  handlerChange = (event) => {
    this.setState({ query: event.target.value });
    const pattern = new RegExp(this.state.query, 'gi');
    const filteredMovies = this.props.movies.filter(
      movie => (movie.title.search(pattern) >= 0
      || movie.description.search(pattern) >= 0
      ),
    );

    this.props.handler(filteredMovies);
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
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={this.handlerChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};
