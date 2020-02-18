import React, { Component } from 'react';
import './App.scss';
import { SearchBar } from './components/SearchBar';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onChange={(e => this.handleSearch(e))} />
          <MoviesList movies={moviesFromServer} searchValue={searchValue} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
