import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';
import './App.scss';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  getQuery = ({ target }) => {
    this.setState({ query: target.value });
  }

  getFilteredMovies = () => {
    const { movies, query } = this.state;

    return [...movies].filter(movie => (
      (movie.title + movie.description).toLowerCase()
        .indexOf(query.toLowerCase()) !== -1));
  }

  render() {
    const { movies, query } = this.state;

    return (
      <div className="page">
        <div className="page-content">

          <Search
            query={query}
            getQuery={this.getQuery}
          />

          <MoviesList
            movies={query
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
