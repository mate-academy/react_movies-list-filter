import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Search from './components/Search/Search';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  updateMovies = (updatedMovies) => {
    this.setState({
      movies: updatedMovies,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search movies={moviesFromServer} update={this.updateMovies} />

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
