import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesSearch } from './components/MoviesSearch/MoviesSearch';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesSearch movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
