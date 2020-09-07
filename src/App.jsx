import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    filteredFilms: [],
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search moviesFromServer={moviesFromServer} />

          <MoviesList movies={this.state.filteredFilms} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
