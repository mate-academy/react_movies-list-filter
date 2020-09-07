import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  filmFilter = (event) => {
    const { value } = event.target;

    this.setState({ query: value.toLowerCase() });
  }

  render() {
    const { query, movies } = this.state;

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
                  onChange={this.filmFilter}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
