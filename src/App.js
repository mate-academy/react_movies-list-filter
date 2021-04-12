import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
  };

  moviesFilter = (movie) => {
    const lowerCase = movie.toLowerCase();

    this.setState({
      movies: moviesFromServer.filter(mov => (
        (mov.title + mov.description)
          .toLowerCase()
          .includes(lowerCase)
      )),
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search moviesFilter={this.moviesFilter} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
