import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
  };

  filterMovies = (query, movies) => {
    this.setState({
      query,
      movies,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            query={this.state.query}
            filterMovies={this.filterMovies}
            moviesFromServer={moviesFromServer}
          />
          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
