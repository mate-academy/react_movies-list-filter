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
    const filterByTitle = moviesFromServer
      .filter(movie => (movie.title.toLowerCase()
        .includes(this.state.query.toLowerCase())));

    const filterByDescription = moviesFromServer
      .filter(movie => (movie.description.toLowerCase()
        .includes(this.state.query.toLowerCase())));

    const filteredMovies = filterByTitle || filterByDescription;

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
                  onChange={(event) => {
                    this.setState({
                      query: event.target.value,
                    });
                  }}
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
