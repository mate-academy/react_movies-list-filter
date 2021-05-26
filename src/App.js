import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    const { query } = this.state;
    const insensitive = query.toLowerCase();

    let movies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(insensitive)));

    if (movies.length === 0) {
      movies = moviesFromServer.filter(movie => (
        movie.description.toLowerCase().includes(insensitive)));
    }

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
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
