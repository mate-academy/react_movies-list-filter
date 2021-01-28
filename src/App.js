import React, { Component } from 'react';
import './App.scss';
import { SearchMovie } from './components/SearchMovie/SearchMovie';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  saveQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const filteredMovies = moviesFromServer.filter(movie => movie.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase())
      || movie.description
        .toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie saveQuery={this.saveQuery} query={query} />

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
