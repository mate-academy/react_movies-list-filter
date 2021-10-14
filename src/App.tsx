import React from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  setChangeQuery = (value: string): void => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(movie => (movie.title + movie.description)
        .toLowerCase()
        .includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} setQuery={this.setChangeQuery} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
