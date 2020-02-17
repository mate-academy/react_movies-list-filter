import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeHandler = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  queryHandler = (movies, queries) => {
    const pattern = new RegExp(`${queries}`, 'gi');

    return movies
      .filter(movie => movie.description.search(pattern) >= 0
      || movie.title.search(pattern) >= 0);
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
                  onChange={this.changeHandler}
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.queryHandler(moviesFromServer, query)} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
