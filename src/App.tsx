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

  changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const visibleMovies = moviesFromServer.filter(movie => {
      const queryToFilter = query.toLowerCase();

      return (
        movie.title.toLowerCase().includes(queryToFilter)
        || movie.description.toLowerCase().includes(queryToFilter)
      );
    });

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            query={query}
            changeHandler={this.changeHandler}
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
