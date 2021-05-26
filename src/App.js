import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import './App.scss';

export class App extends Component {
  state = {
    query: '',
    visibleMovies: moviesFromServer,
  }

  changeQuery = (event) => {
    this.setState({
      query: event.target.value,
      visibleMovies: moviesFromServer.filter(
        movie => movie.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
        || movie.description
          .toLowerCase()
          .includes(event.target.value.toLowerCase()),
      ),
    });
  }

  render() {
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
                  onChange={this.changeQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
