import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

function moviesFilter(movies, query) {
  const filtered = movies.filter(
    movie => movie.title.toLowerCase().includes(
      query.toLowerCase(),
    )
    || movie.description.toLowerCase().includes(
      query.toLowerCase(),
    ),
  );

  return filtered;
}

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;

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
                  onChange={this.changeQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={query
            ? moviesFilter(moviesFromServer, query)
            : moviesFromServer
          }
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
