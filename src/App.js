import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import SearchMovies from './components/SearchMovies/SearchMovies';

export class App extends Component {
  state = {
    query: '',
  };

  render() {
    let { query } = this.state;

    query = query.toLowerCase();

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
                  onChange={(e) => {
                    this.setState({ query: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <SearchMovies
            query={query}
            movies={moviesFromServer}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
