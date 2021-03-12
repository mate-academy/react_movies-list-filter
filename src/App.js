import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
    movies: [...moviesFromServer],
  };

  searchInput = (event) => {
    this.setState({
      search: event.target.value,
    });
  }

  render() {
    const { movies, search } = this.state;

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
                  value={this.state.search}
                  onChange={this.searchInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies} search={search} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
