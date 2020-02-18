import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchForm } from './components/SerchForm/SearchForm';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  handlerSearch = (findMovies, query) => this.setState({
    movies: findMovies,
    query,
  })

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchForm movies={moviesFromServer} handler={this.handlerSearch} />
          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
