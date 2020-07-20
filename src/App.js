import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    moviesList: moviesFromServer,
  };

  searchMovies = (search) => {
    this.setState({ find: search });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search movies={this.state.moviesList} search={this.searchMovies} />
          <MoviesList movies={this.state.find
            ? this.state.find
            : this.state.moviesList}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
