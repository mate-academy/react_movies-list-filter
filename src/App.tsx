import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

type State = {
  query: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  changeQuery = (value: string) => {
    this.setState({ query: value });
  };

  filterMovies = () => {
    const queryToFilter = this.state.query.toLowerCase();

    return moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(queryToFilter)
      || movie.description.toLowerCase().includes(queryToFilter)
    ));
  };

  render() {
    const { query } = this.state;
    const visibleMovies = this.filterMovies();

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            query={query}
            changeQuery={this.changeQuery}
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
