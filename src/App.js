import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar/SearchBar';

export class App extends Component {
  state = {
    query: '',
  };

  changingQuery = (value) => {
    this.setState(prevState => ({
      query: value,
    }));
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(movie => movie.title.toLowerCase()
        .includes(query.toLowerCase())
        || movie.description.toLowerCase()
          .includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar changeFilter={this.changingQuery} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
