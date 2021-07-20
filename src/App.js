import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField/SearcshField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  сhangeQuery = event => this.setState({
    query: event.target.value,
  })

  filterMovies = () => moviesFromServer.filter(
    movie => movie.description.toLowerCase().includes(
      this.state.query.toLowerCase(),
    )
    || movie.title.toLowerCase().includes(this.state.query.toLowerCase()),
  );

  render() {
    const { query } = this.state;

    const filteredMovies = this.filterMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            value={query}
            onChange={this.сhangeQuery}
          />
          <MoviesList
            movies={filteredMovies}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
