import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchControl } from './components/SearchControl/SearchControl';

export class App extends Component {
  state = {
    query: '',
  }

  setSearchQuery = ({ target }) => {
    this.setState({
      query: target.value,
    });
  };

  render() {
    const movies = moviesFromServer.filter((movie) => {
      const { title, description } = movie;
      const pattern = new RegExp(this.state.query, 'i');

      return ((title.search(pattern) !== -1)
      || (description.search(pattern) !== -1));
    });

    return (
      <div className="page">
        <div className="page-content">
          <SearchControl setSearchQuery={this.setSearchQuery} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
