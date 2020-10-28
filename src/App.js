import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: [...moviesFromServer],
  };

  filterMovies = (event) => {
    const { name, value } = event.target;
    const valueToLower = value.toLowerCase();

    const filterCallback = (movie) => {
      const titleToLower = movie.title.toLowerCase();
      const descriptionToLower = movie.description.toLowerCase();

      return titleToLower.includes(valueToLower)
        || descriptionToLower.includes(valueToLower);
    };

    this.setState({
      [name]: value,
      movies: [...moviesFromServer].filter(filterCallback),
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
                  name="query"
                  className="input"
                  value={this.state.query}
                  placeholder="Type search word"
                  onChange={this.filterMovies}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
