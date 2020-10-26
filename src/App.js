import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    filteredMovies: moviesFromServer,
  };

  updateMovies = (newState) => {
    this.setState({
      ...newState,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <Search movies={moviesFromServer} update={this.updateMovies} />
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
