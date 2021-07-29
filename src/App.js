import React, { Component } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    moviesList: [...moviesFromServer],
    query: '',
  };

  handleChange = (event) => {
    event.persist();

    const value = event.target.value.toLowerCase();

    this.setState(prevState => ({
      query: event.target.value,
      moviesList: moviesFromServer.filter(movie => (
        (movie.title + movie.description)
          .toLowerCase()
          .includes(value.toLowerCase()))),
    }));
  }

  render() {
    const { moviesList, query } = this.state;
    const { handleChange } = this;

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
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
