import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
  };

  filterList = (film) => {
    const lowerCaseFilm = film.toLowerCase().trim();

    this.setState({
      movies: moviesFromServer.filter(movie => (
        (movie.title + movie.description)
          .toLowerCase()
          .includes(lowerCaseFilm)
      )),
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar list={this.filterList} />

          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
