import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  searchHandler = (event) => {
    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie
            handler={this.searchHandler}
            query={query}
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
