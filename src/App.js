import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  changeQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar changeQuery={this.changeQuery} value={query} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
