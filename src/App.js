import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';
import './App.scss';

export class App extends Component {
  state = {
    query: '',
  };

  handleQueryChange = (event) => {
    this.setState({ query: event.target.value });
  }

  filteredMovies = movies => [...movies].filter(
    movie => movie.title.toLowerCase().includes(this.state.query.toLowerCase())
    || movie.description.toLowerCase().includes(this.state.query.toLowerCase()),
  );

  render() {
    const visibleMovies = this.filteredMovies(moviesFromServer);

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
