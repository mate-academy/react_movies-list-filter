import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchForm } from './components/SearchForm';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  setQuery = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  }

  getFilteredMovies = () => {
    const { movies, query } = this.state;

    return (
      movies.filter(({ title, description }) => (title + description)
        .toLowerCase().includes(query))
    );
  }

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">

          <SearchForm
            query={query}
            setQuery={this.setQuery}
          />

          <MoviesList movies={query
            ? this.getFilteredMovies()
            : movies}
          />

        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
