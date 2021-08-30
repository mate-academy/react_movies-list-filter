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

  changeState = (value: string) => {
    this.setState({
      query: value,
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">

          <SearchBar
            query={query}
            changeState={this.changeState}
          />

          <MoviesList
            movies={moviesFromServer}
            query={query}
          />

        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
