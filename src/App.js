import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: moviesFromServer,
  };

  getKeywords = (e) => {
    const word = e.target.value;
    const pattern = new RegExp(`${word}`, 'gi');

    this.setState({
      query: moviesFromServer
        .filter(movie => pattern.test(movie.description)
      || pattern.test(movie.title)),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchBar onChange={this.getKeywords} />

          <MoviesList movies={this.state.query} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
