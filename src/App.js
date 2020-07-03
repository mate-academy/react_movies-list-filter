import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/MovieSearch/Search';

export class App extends Component {
  moviesList = moviesFromServer;

  state = {
    movies: this.moviesList,
  };

  handleMovieListChanges = moviesList => (
    this.setState({ movies: moviesList })
  );

  render() {
    const { movies } = this.state;
    const { handleMovieListChanges } = this;

    return (
      <div className="page">
        <div className="page-content">
          <Search onChange={handleMovieListChanges} movies={movies} />
          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
