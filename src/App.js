import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MoviesFilter } from './components/MovieFilter';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: moviesFromServer,
  };

  filter = (e) => {
    const searchPhrase = e.target.value.toLowerCase();
    const query = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(searchPhrase)
      || movie.description.toLowerCase().includes(searchPhrase)
    ));

    this.setState(() => ({
      query,
    }));
  }

  render() {
    const { query: movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesFilter filter={this.filter} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
