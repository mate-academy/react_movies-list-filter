import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';
import { MoviesList } from './components/MoviesList';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  setQuery = (target: string) => {
    this.setState({ query: target });
  };

  render() {
    const { query } = this.state;
    const { setQuery } = this;

    const visibleMovies = moviesFromServer.filter(movie => (
      movie.description.toLowerCase().includes(query.toLowerCase())
      || movie.title.toLowerCase().includes(query.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} setQuery={setQuery} />
          {visibleMovies.length
            ? <MoviesList movies={visibleMovies} />
            : 'Movie not found'}
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
