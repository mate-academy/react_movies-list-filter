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
    const lowerQuery = query.toLowerCase();

    const moviesFilter = moviesFromServer
      .filter(movie => ((movie.title + movie.description)
        .toLowerCase()
        .includes(lowerQuery)
      ));

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
                  onChange={(e) => {
                    this.setState({
                      query: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesFilter} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
