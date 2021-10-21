import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

type State = {
  query: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    query: '',
  };

  changeQuery = (event: string) => {
    this.setState({ query: event });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <Search onChange={this.changeQuery} />
          <MoviesList movies={moviesFromServer} query={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
