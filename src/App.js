import React from 'react';

import './App.scss';
import { SearchMovie } from './components/SearchMovie';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

export class App extends React.Component {
  state = {
    query: '',
  };

  queryUpdate = (value) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    const normalizeQuery = query.toLowerCase().trim();

    const visibleMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(normalizeQuery)
        || movie.description.toLowerCase().includes(normalizeQuery),
    );

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie queryUpdate={this.queryUpdate} />
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
