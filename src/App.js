import React, { Component } from 'react';
import './App.scss';
import { SearchBar } from './components/SearchBar';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {};

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchBar />

          <MoviesList movies={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
