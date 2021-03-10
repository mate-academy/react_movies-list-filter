import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
  };

  setQuery = (value) => {
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(movie => (movie.title + movie.description)
        .toLowerCase()
        .includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} setQuery={this.setQuery} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
