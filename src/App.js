import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import Filter from './components/Filter/Filter';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    searchText: '',
  };

  onHandleChange = (value) => {
    this.setState({ searchText: value });
  }

  render() {
    const { searchText } = this.state;
    const filmList = (searchText === '')
      ? moviesFromServer
      : moviesFromServer.filter(({ title, description }) => (
        title + description
      ).toUpperCase().includes(searchText.toUpperCase()));

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <Filter onFilterChange={this.onHandleChange} />
            </div>
          </div>

          <MoviesList movies={filmList} searchText={searchText} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
