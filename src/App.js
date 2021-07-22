import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { ControlsInput } from './components/ControlsInput';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    filteredMovieList: moviesFromServer,
  };

  setFilteredMovieList = (filteredMovie) => {
    this.setState({ filteredMovieList: filteredMovie });
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
                setFilteredMovieList={this.setFilteredMovieList}
                moviesFromServer={moviesFromServer}
                filtering={this.filtering}
              />
            </div>
          </div>

          <MoviesList movies={this.state.filteredMovieList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
