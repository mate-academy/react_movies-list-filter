import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const moviesList = [...moviesFromServer.filter((movie) => {
      const query = this.state.query.toLowerCase();

      return (
        movie.title.toLowerCase().includes(query)
        || movie.description.toLowerCase().includes(query)
      );
    })];

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
                  onChange={this.searchHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
