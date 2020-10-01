import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  };

  handleFilter = (movies) => {
    this.setState({
      movies,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search movies={moviesFromServer} onFilter={this.handleFilter} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
