import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  updateQuery = (event) => {
    const newQuery = event.target.value.toLowerCase();

    this.setState({
      query: newQuery,
      movies: this.filteredMovies(newQuery),
    });
  }

  filteredMovies = query => moviesFromServer
    .filter(movie => movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query))

  render() {
    const { query, movies } = this.state;

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
                  onChange={this.updateQuery}
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
