import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchFilm } from './components/SearchFilm/SearchFilm';

export class App extends Component {
  state = {
    query: '',
  };

  сhangeQuery = ({ target }) => this.setState({ query: target.value });

  filterMovies = () => moviesFromServer.filter(
    movie => movie.description.toLowerCase().includes(
      this.state.query.toLowerCase(),
    )
    || movie.title.toLowerCase().includes(this.state.query.toLowerCase()),
  );

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchFilm value={this.state.query} onChange={this.сhangeQuery} />
          <MoviesList movies={this.filterMovies()} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
