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
    isHighlighted: false,
  }

  onSearchSubmit = (term) => {
    const query = term.trim().toLowerCase();

    this.setState(state => ((query === '')
      ? {
        visibleMoviesList: [...state.movies],
        isHighlighted: false,
      }
      : {
        visibleMoviesList: state.movies.filter(movie => (movie.title + movie.description).toLowerCase().includes(query) === true),
        isHighlighted: true,
      }));
    this.setState({ searchParam: query });
  }

  render() {
    const
      { visibleMoviesList
        , searchParam,
        isHighlighted } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <MoviesList
            movies={visibleMoviesList}
            searchTerm={searchParam}
            isHighlighted={isHighlighted}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
