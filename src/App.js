import React, { Component } from 'react';

import { MovieSearch } from './components/MovieSearch';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import './App.scss';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MovieSearch
            query={query}
            handleChange={this.handleChange}
          />

          <MoviesList
            query={query}
            movies={moviesFromServer}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
