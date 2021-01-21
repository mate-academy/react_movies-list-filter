import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    searchInput: '',
  };

  searchHandler = event => (
    this.setState({
      searchInput: event.target.value,
    }, this.filetVisibleMovies)
  )

  filetVisibleMovies = () => {
    this.setState(state => (
      {
        movies: moviesFromServer
          .filter(movie => movie.title
            .toLowerCase().includes(state.searchInput.toLowerCase())
            || movie.description
              .toLowerCase().includes(state.searchInput.toLowerCase())),
      }
    ));
  }

  render() {
    const { movies, searchInput } = this.state;

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
                  name="searchInput"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={searchInput}
                  onChange={this.searchHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={movies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
