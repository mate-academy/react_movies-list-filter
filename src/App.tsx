import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  addQuery = (value: string) => {
    this.setState({ query: value });
  };

  getFilteredMovies = () => {
    const { query } = this.state;
    const queryLow = query.toLowerCase();
    const filteredMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(queryLow)
      || movie.description.toLowerCase().includes(queryLow)
    ));

    return filteredMovies;
  };

  render() {
    const { query } = this.state;
    const filteredMovies = this.getFilteredMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar query={query} addQuery={this.addQuery} />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
