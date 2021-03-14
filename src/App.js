import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    inputValue: '',
  };

  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { movies, inputValue } = this.state;

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
                  value={inputValue}
                  onChange={this.inputHandler}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={movies.filter((movie) => {
            const description = movie.description.toLowerCase();
            const title = movie.title.toLowerCase();
            const value = inputValue.toLowerCase();

            return title.match(value) || description.match(value);
          })}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
