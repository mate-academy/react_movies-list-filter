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

  changeQuery = (newQuery: string) => {
    this.setState({ query: newQuery });
  };

  filteredMovies = () => {
    const { query } = this.state;

    return (
      moviesFromServer.filter(movie => (
        `${movie.title} ${movie.description}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ))
    );
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            query={this.state.query}
            changeQuery={this.changeQuery}
          />
          <MoviesList
            movies={this.filteredMovies()}
          />
        </div>

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
