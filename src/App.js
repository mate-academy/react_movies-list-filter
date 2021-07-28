import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  hadleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  prepareMovies = (query, movies) => {
    if (!query) {
      return [...movies];
    }

    const filteredMovies = [...movies].filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(query.toLowerCase())
      || description.includes(query.toLowerCase());
    });

    return filteredMovies;
  }

  render() {
    const { query, movies } = this.state;
    const preparedMovies = this.prepareMovies(query, movies);

    return (
      <div className="page">
        <div className="page-content">
          <SearchField query={query} onChange={this.hadleChange} />

          <MoviesList movies={preparedMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
