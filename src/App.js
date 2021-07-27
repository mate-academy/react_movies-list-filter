import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';
import './App.scss';

export class App extends Component {
  state = {
    query: '',
    visibleMovies: moviesFromServer,
  };

  handleQueryChange = (event) => {
    this.setState({
      query: event.target.value,
      visibleMovies: this.filteredMovies(moviesFromServer),
    });
  }

  filteredMovies = movies => movies.filter(
    movie => movie.title.toLowerCase().includes(this.state.query.toLowerCase())
    || movie.description.toLowerCase().includes(this.state.query.toLowerCase()),
  )

  render() {
    const { query, visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie
            value={query}
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
