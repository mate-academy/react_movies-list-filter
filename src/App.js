import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Search from './components/Search/Search';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    moviesForShow: moviesFromServer,
  };

  updateSearchingMovies = (filter) => {
    this.setState(({ movies }) => ({
      moviesForShow: movies.filter(filter),
    }));
  };

  render() {
    const { moviesForShow } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search filter={this.updateSearchingMovies} />

          <MoviesList movies={moviesForShow} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
