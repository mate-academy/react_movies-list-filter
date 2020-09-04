import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    queryFromUser: '',
  };

  updateQuery = (value) => {
    this.setState({ queryFromUser: value });
  };

  render() {
    const { queryFromUser } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search query={queryFromUser} updateQuery={this.updateQuery} />
          <MoviesList movies={moviesFromServer} query={queryFromUser} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
