import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import SearchBar from './components/searcField/SearchField';

export class App extends Component {
  state = {
    search: '',
  };

  searchField = (search) => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchBar callBack={this.searchField} />
          <MoviesList movies={moviesFromServer} search={this.state.search} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
