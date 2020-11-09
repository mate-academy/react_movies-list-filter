/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export class App extends Component {
  state = {
    query: '',
  };

  onChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    const { query } = this.state;
    const movies = [...moviesFromServer].filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return (
        title.includes(query.toLowerCase()) ||
        description.includes(query.toLowerCase())
      );
    });

    return (
      <div className="page">
        <div className="page-content">
          <Search query={query} onChange={this.onChange} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    );
  }
}
