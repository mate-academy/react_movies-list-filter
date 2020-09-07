import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  filterMovies = (event) => {
    const { value } = event.target;

    this.setState({
      query: value.toLowerCase().trim(),
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase()
          .includes(value)
        || movie.description.toLowerCase()
          .includes(value)
      )),
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
                  onChange={this.filterMovies}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
