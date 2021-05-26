import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  safeQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const lowerQuery = query.toLowerCase();

    // eslint-disable-next-line max-len
    const visibleMovies = moviesFromServer.filter(movie => movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery));

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
                  value={this.state.query}
                  onChange={this.safeQuery}
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
