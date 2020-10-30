import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  findMovie = () => this.state.movies.filter((movie) => {
    const substr = this.state.query.toUpperCase();
    const title = movie.title.toUpperCase();
    const description = movie.description.toUpperCase();

    return (title.includes(substr) || description.includes(substr));
  })

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
                  onChange={(event) => {
                    this.setState({ query: event.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.findMovie()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
