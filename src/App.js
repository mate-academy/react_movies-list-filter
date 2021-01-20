import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    search: '',
    movies: moviesFromServer,
  };

  handleSearchInput = (event) => {
    this.setState({
      search: event.target.value,
    }, this.moviesFilter);
  }

  moviesFilter = () => {
    this.setState({
      movies: moviesFromServer
        .filter(movie => movie.title
          .toLowerCase().includes(prevState.search.toLowerCase())
          || movie.description
            .toLowerCase().includes(prevState.search.toLowerCase())),
    });
  }

  render() {
    const { search, movies } = this.state;

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
                  value={search}
                  onChange={this.handleSearchInput}
                />
              </div>
            </div>
          </div>
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
