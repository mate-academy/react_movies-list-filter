import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { ControlsInput } from './components/ControlsInput';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    filteredMovies: moviesFromServer,
  };

  setFilteredMovies = (filteredMovie) => {
    this.setState({ filteredMovies: filteredMovie });
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

              <ControlsInput
                setFilteredMovies={this.setFilteredMovies}
                moviesFromServer={moviesFromServer}
              />
            </div>
          </div>

          <MoviesList movies={this.state.filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
