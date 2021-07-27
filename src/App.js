import React, { Component } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';

import './App.scss';

export class App extends Component {
  state = {
    query: '',
  };

  searchHandler = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  };

  moviesFilter = () => (
    moviesFromServer.filter((movie) => {
      const { title, description } = movie;
      const { query } = this.state;

      const foundInTitle = title.toLowerCase()
        .includes(query.toLowerCase());

      const foundInDescription = description.toLowerCase()
        .includes(query.toLowerCase());

      return foundInTitle || foundInDescription;
    })
  );

  render() {
    const { query } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            value={query}
            onChange={this.searchHandler}
          />
          <MoviesList
            movies={query
              ? this.moviesFilter()
              : moviesFromServer
            }
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
