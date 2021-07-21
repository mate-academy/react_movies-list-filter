import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    filteredMovies: moviesFromServer,
  }

  makeSearchParam = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
      filteredMovies: this.filterMovies(value),
    });
  };

  filterMovies = query => (
    moviesFromServer.filter((movie) => {
      const { title, description } = movie;
      const regex = new RegExp(query, 'gi');

      return regex.test(title) || regex.test(description);
    })
  )

  render() {
    const { query, filteredMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            action={this.makeSearchParam}
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
