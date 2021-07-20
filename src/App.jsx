import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  }

  makeSearchParam = (event) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  filterMovies = (movies, searchQuery) => {
    return movies.filter((movie) => {
      const { title, description } = movie;
      const regex = new RegExp(searchQuery, 'gi');

      return regex.test(title) || regex.test(description);
    });
  }

  render() {
    const { query } = this.state;
    const filteredMovies = this.filterMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            makeSearchParam={this.makeSearchParam}
            query={query}
          />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
