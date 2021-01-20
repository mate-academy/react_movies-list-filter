import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieFilter extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    sendFilteredList: PropTypes.func.isRequired,
  }

  state = {
    query: '',
  }

  handleChange = (event) => {
    const query = event.target.value;

    this.sendFilteredList(query);

    this.setState({
      query: event.target.value,
    });
  }

  filterMovies = (list, query) => {
    const processedList = list.filter((movie) => {
      const searchName = query.toLowerCase();

      return movie.title.toLowerCase().includes(searchName)
        || movie.description.toLowerCase().includes(searchName);
    });

    return processedList;
  }

  sendFilteredList = (query) => {
    const { movies, sendFilteredList } = this.props;

    sendFilteredList(this.filterMovies(movies, query));
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
              value={query}
              onChange={this.handleChange}
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>
    );
  }
}
