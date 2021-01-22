import React, { Component } from 'react';
import './App.scss';
import { SearchMovie } from './components/SearchMovie/SearchMovie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  filterMovies = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    const searchMovie = moviesFromServer.filter(movie => movie.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase())
      || movie.description
        .toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie filterMovies={this.filterMovies} query={query} />

          <MoviesList movies={searchMovie} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
