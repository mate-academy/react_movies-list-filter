import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MovieSearch } from './components/MovieSearch/MovieSearch';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, query) => {
  const queryToLowerCase = query.toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    const titleToLowerCase = movie.title.toLowerCase();
    const descriptionToLowerCase = movie.description.toLowerCase();

    return (
      titleToLowerCase.includes(queryToLowerCase)
      || descriptionToLowerCase.includes(queryToLowerCase)
    );
  });

  return filteredMovies;
};

export class App extends Component {
  state = {
    query: '',
  };

  queryChangeHandler = (query) => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MovieSearch
            query={this.state.query}
            changeHandler={this.queryChangeHandler}
          />
          <MoviesList
            movies={getFilteredMovies(moviesFromServer, query)}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
