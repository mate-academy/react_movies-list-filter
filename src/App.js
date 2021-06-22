import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  saveQuery = (value) => {
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchField query={query} saveQuery={this.saveQuery} />
          </div>

          <MoviesList movies={moviesFromServer} query={query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
