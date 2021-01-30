/* eslint-disable max-len */
import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    visibleMoviesList: moviesFromServer,
    searchParam: '',
  }

  onSearchSubmit = (term) => {
    const query = term.trim();

    this.setState(state => ((query === '')
      ? { visibleMoviesList: [...state.movies] }
      : { visibleMoviesList: state.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()) === true
        || movie.description.toLowerCase().includes(query.toLowerCase()) === true) }));
    this.setState({ searchParam: query });
  }

  render() {
    const { visibleMoviesList, searchParam } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <MoviesList
            movies={visibleMoviesList}
            searchTerm={searchParam}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
