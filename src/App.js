import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
    filteredMovies: moviesFromServer,
  };

  handleFilter = (event) => {
    const { value } = event.target;
    const { movies } = this.state;

    this.setState({
      query: String(value),
      filteredMovies: movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const description = movie.description.toLowerCase();
        const fixedQuery = value.toLowerCase().trim();

        return (
          title.includes(fixedQuery) || description.includes(fixedQuery)
        )
          ? movie
          : null;
      }),
    });
  }

  render() {
    const { state, handleFilter } = this;
    const { filteredMovies } = state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar filter={handleFilter} value={this.state.query} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
