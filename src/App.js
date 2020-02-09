import React, { Component } from 'react';
import './App.scss';
import { SearchBar } from './components/SearchBar';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleQueryChange = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            query={this.state.query}
            onQueryChange={this.handleQueryChange}
          />

          <MoviesList movies={moviesFromServer} query={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
