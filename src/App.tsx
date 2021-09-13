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

  setQuery = (value: string) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const copyQuery = query.toLowerCase();

    const visibleMovies = moviesFromServer.filter(movie => (
      movie.description.toLowerCase().includes(copyQuery)
      || movie.title.toLowerCase().includes(copyQuery)
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} setQuery={this.setQuery} />
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
