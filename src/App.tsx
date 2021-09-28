import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import SearchBar from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state = {
    query: '',
  };

  setQuery = (value: string) => {
    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;

    const visualizedMovies = moviesFromServer
      .filter(({ title, description }) => (title + description).toLowerCase()
        .includes(query.toLowerCase()));

    return (
      <div className="page">
        <div className="page-content">

          <SearchBar
            query={query}
            setQuery={this.setQuery}
          />

          <MoviesList
            movies={visualizedMovies}
          />

        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
