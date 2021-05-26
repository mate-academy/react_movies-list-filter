import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  search = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    const allMovies = [...moviesFromServer];
    const normalize = query.toLowerCase();
    const visibleMovies = allMovies.filter(movie => (
      (movie.title.toLowerCase().includes(normalize)
    || movie.description.toLowerCase().includes(normalize))));

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
                  search="type for search"
                  value={query}
                  onChange={this.search}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
