import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handlerQueryChange = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    const normalizedQuery = query.toLowerCase();
    const moviesToDisplay = moviesFromServer
      .filter(movie => movie.title
        .toLowerCase().includes(normalizedQuery)
      || movie.description
        .toLowerCase().includes(normalizedQuery));

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
                  onChange={this.handlerQueryChange}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesToDisplay} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
