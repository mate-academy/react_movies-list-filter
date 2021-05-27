import React, { Component } from 'react';

import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';

import './App.scss';

import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  updateQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const normalizedQuery = query.toLowerCase();

    const visibleMovies = moviesFromServer.filter(movi => (
      movi.title.toLowerCase().includes(normalizedQuery)
      || movi.description.toLowerCase().includes(normalizedQuery)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar updateQuery={this.updateQuery} />

          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
