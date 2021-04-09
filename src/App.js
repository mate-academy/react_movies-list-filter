import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
    query: '',
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  filterMovies = (movies, criteria) => movies.filter((movie) => {
    const searchIn
      = (`${movie.description} ${movie.title}`).toLocaleLowerCase();

    return searchIn.includes(criteria.toLocaleLowerCase());
  })

  render() {
    const { movies, query } = this.state;

    const filteredMovies = this.filterMovies(movies, query);

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
                  value={query}
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
