import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  onChangeHandler = (event) => {
    const { value } = event.target;
    const queryLowered = value.toLowerCase();

    this.setState({
      query: value,
      movies: moviesFromServer
        .filter(movie => movie.title.toLowerCase().includes(queryLowered)
        || movie.description.toLowerCase().includes(queryLowered)),
    });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label
                htmlFor="search-query"
                className="label"
              >
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.onChangeHandler}
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
