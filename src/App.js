import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieFilter } from './components/MovieFilter';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredMovies: moviesFromServer,
    };
    this.applyFilteredList = this.applyFilteredList.bind(this);
  }

  applyFilteredList(filteredList) {
    this.setState({
      filteredMovies: filteredList,
    });
  }

  render() {
    const { filteredMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MovieFilter
            movies={moviesFromServer}
            sendFilteredList={this.applyFilteredList}
          />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
