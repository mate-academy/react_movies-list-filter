import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  setQuery = (query: string) => {
    this.setState({ query });
  };

  filteredMovies = () => {
    const { query } = this.state;

    const movies: Movie[] = [...moviesFromServer].filter(({ title, description }) => {
      return description.toUpperCase().includes(query.toUpperCase())
      || title.toUpperCase().includes(query.toUpperCase());
    });

    return movies;
  };

  render() {
    const { query } = this.state;

    const filteredMovies = this.filteredMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchField query={query} setQuery={this.setQuery} />

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
