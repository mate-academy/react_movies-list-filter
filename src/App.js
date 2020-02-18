import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredMovies = (movies, query) => {
  const queryToLowerCase = query.toLowerCase();

  return movies
    .filter(movie => movie.title.toLowerCase().includes(queryToLowerCase)
      || movie.description.toLowerCase().includes(queryToLowerCase));
};

export class App extends Component {
  state = {
    query: '',
  };

  handlerSearch = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;
    const movies = filteredMovies(moviesFromServer, query);

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
                  onChange={this.handlerSearch}
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
