import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchControl } from './components/SearchControl/SearchControl';

export class App extends Component {
  state = {
    query: '',
  }

  setSearchQuery(query) {
    this.setState({
      query,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchControl app={this} />
          <MoviesList movies={moviesFromServer} query={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
