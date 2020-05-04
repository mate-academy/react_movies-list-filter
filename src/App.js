import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    moviesList: moviesFromServer,
    query: '',
  }

  searchMovies = (moviesList, query) => {
    if (query === 0) {
      return moviesList;
    }

    return moviesList.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    ));
  }

  searchQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { moviesList, query } = this.state;
    const moviesQuery = this.searchMovies(moviesList, query);

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
                  onChange={this.searchQuery}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={moviesQuery} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
