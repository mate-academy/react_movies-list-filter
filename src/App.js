import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MovieSearch } from './components/MovieSearch/MovieSearch';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, query) => movies.filter((movie) => {
  const queryToLowerCase = query.toLowerCase();

  return movie.title.toLowerCase().includes(queryToLowerCase)
  || movie.description.toLowerCase().includes(queryToLowerCase);
});

export class App extends Component {
  state = {
    query: '',
  };

  queryHandlerChange = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    const filteredMovies = getFilteredMovies(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <MovieSearch
            query={this.state.query}
            changeHandler={this.queryHandlerChange}
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
