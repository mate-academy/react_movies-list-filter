import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const moviesFilter = (movies, query) => {
  const queryLowerCase = query.toLowerCase();

  /* eslint-disable max-len */
  return movies.filter(movie => movie.title.toLowerCase().includes(queryLowerCase)
  /* eslint-enable max-len */
    || movie.description.toLowerCase().includes(queryLowerCase));
};

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const filteredMovies = moviesFilter(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
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
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={filteredMovies} />
        </div>

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
